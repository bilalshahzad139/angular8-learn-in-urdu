using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.IO;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using CoreApiTesting.Helper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Filters;
using Microsoft.IdentityModel.Tokens;

namespace CoreApiTesting.Controllers
{
    [Route("api/main")]
    [ApiController]
    public class MainController : ControllerBase
    {
        [HttpGet("test")]
        public String GetTest()
        {
            return "Welcome";
        }

        [HttpPost("ValidateUser")]
        public Object ValidateUser(LoginInfo loginInfo)
        {
            var userObj = DummyDAL.ValidateUser(loginInfo.Login, loginInfo.Password);
            if (userObj != null)
            {
                string key = "my_secret_key_12345";
                var issuer = "http://mysite.com";
                var securityKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(key));
                var credentials = new SigningCredentials(securityKey, SecurityAlgorithms.HmacSha256);

                var permClaims = new List<Claim>();
                permClaims.Add(new Claim("valid", "1"));
                permClaims.Add(new Claim("userid", userObj.UserId.ToString()));
                permClaims.Add(new Claim("name", userObj.Name));

                var token = new JwtSecurityToken(issuer,
                                issuer,
                                permClaims,
                                expires: DateTime.Now.AddDays(1),
                                signingCredentials: credentials);
                var jwt_token = new JwtSecurityTokenHandler().WriteToken(token);
                return new { success= true, Name = userObj.Name, token = jwt_token };
            }
            else
            {
                return new { success = false };
            }

        }


        [ClaimDTOAttribute]
        [Authorize(Policy = "IsValid")]
        [HttpGet("getpersons")]
        public Object GetPersons([FromHeader] ClaimDTO claimDto)
        {
            try
            {
                var persons = DummyDAL.GetPersons(claimDto.UserID);

                return new
                {
                    success = true,
                    data = persons
                };
            }
            catch (Exception ex)
            {
                return new { success = false };
            }
        }
    }


    public class ClaimDTO
    {
        public int UserID { get; set; }
        public String FullName { get; set; }
    }
    public class ClaimDTOAttribute : ActionFilterAttribute
    {
        public override void OnActionExecuting(ActionExecutingContext context)
        {
            var dto = ((ClaimDTO)context.ActionArguments["claimDto"]);
            var claimsIdentity = context.HttpContext.User.Identity as ClaimsIdentity;
            dto.UserID = Convert.ToInt32(claimsIdentity.Claims.FirstOrDefault(c => c.Type == "userid")?.Value);
            dto.FullName = claimsIdentity.Claims.FirstOrDefault(c => c.Type == "name").Value;
        }
    }

    public class LoginInfo
    {
        public string Login { get; set; }
        public String Password { get; set; }
    }
}