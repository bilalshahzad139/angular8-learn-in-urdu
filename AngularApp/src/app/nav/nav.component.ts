import { Component, OnInit } from '@angular/core';
import { BackendServiceService } from '../backend-service.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  isAuthenticated:boolean = false;
  constructor(private bs:BackendServiceService) { }

  ngOnInit() {
    this.bs.userLoggedInObs.
    subscribe(m=> this.isAuthenticated = m);
  }

}
