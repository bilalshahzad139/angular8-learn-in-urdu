using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CoreApiTesting.Helper
{
    public static class DummyDAL
    {
        
       public static UserInfo ValidateUser(String pLogin,String pPassword)
        {
            if (pLogin == "admin" && pPassword == "admin")
                return new UserInfo { Name = "Bilal", UserId = 1 };
            if (pLogin == "admin2" && pPassword == "admin2")
                return new UserInfo { Name = "Shahzad", UserId = 2 };
            else
                return null;
        }

        public static List<Person> GetPersons(int userId)
        {
            List<Person> persons = new List<Person>();

            if(userId == 1)
            {
                persons.Add(new Person(1, "Khurram Shahzad", 100));
                persons.Add(new Person(2, "Bilal Shahzad", 110));
                persons.Add(new Person(3, "Waqas Shahzad", 120));
                persons.Add(new Person(4, "Faisal Shahzad", 130));
            }
            else
            {
                    persons.Add(new Person(5, "Shahzad Khurram ", 200));
                    persons.Add(new Person(6, "Shahzad Bilal", 210));
                    persons.Add(new Person(7, "Shahzad Waqas", 220));
                    persons.Add(new Person(8, "Shahzad Faisal", 230));
            }

            return persons;
        }
    }

    public class UserInfo
    {
        public int UserId { get; set; }
        public String Name { get; set; }
    }

    public class Person
    {
        public Person(int id, string n, int a)
        {
            ID = id;
            Name = n;
            Age = a;
        }
        public int ID { get; set; }
        public String Name { get; set; }
        public int Age { get; set; }
    }
    
}
