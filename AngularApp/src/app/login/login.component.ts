import { Component, OnInit } from '@angular/core';
import { BackendServiceService } from '../backend-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string;
  password: string;
  message: string;
  constructor(private backendService:BackendServiceService, private router:Router) { }

  ngOnInit() {
  }

  onLoginClicked(){
    this.backendService.validateUser(this.username,this.password)
    .subscribe(m => {
      if(m)
       {
        this.router.navigate(['/home']);
       }
      else
        this.message = "Invalid user";
    });

  }

  onClear(){
    this.username = "";
    this.password = "";
    this.message ="";
  }

}
