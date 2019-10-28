import { Component, OnInit } from '@angular/core';
import { BackendServiceService } from '../backend-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private bs: BackendServiceService,
      private router: Router) { }

  ngOnInit() {
    this.bs.logOut();
    this.router.navigateByUrl('/login');
  }

}
