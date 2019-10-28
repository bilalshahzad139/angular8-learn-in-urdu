import { Component, OnInit, Inject } from '@angular/core';
import { BackendServiceService } from '../backend-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  name:string = "";
  constructor(private backendService: BackendServiceService) {

  //   @Inject("MyToken") private v
  // , @Inject("MyTest") private v2:TestClass
    //alert(v);
    //alert(v2.age);

  }

  ngOnInit() {
    this.name = this.backendService.getName();
  }

}
