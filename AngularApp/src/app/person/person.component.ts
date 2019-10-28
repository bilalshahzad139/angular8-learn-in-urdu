import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
import { Person } from '../person';


@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {

  @Input() per:Person;
  @Output() counterEvent = new EventEmitter<number>();
  iscounted:boolean =false;
  constructor() {
    //this.per = new Person(1,"Bilal",100);
  }

  ngOnInit() {
  }
  OnCountClicked(){
    this.iscounted = true;
    this.counterEvent.emit(this.per.id);
  }
}
