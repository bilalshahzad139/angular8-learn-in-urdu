import { Component, OnInit } from '@angular/core';
import { Person } from '../person';
import { BackendServiceService } from '../backend-service.service';

@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.css']
})
export class PersonListComponent implements OnInit {

  persons:Person[] = [];
  selPersons:number = 0;

  constructor(private backenService: BackendServiceService) {
  }

  ngOnInit() {
    this.backenService.getPersons()
    .subscribe(
      m => {
        debugger;
        this.persons = m;
      }
    );
  }

  personcountHandled($event){
    this.selPersons++;
    //alert('hello ' + $event);
  }

}
