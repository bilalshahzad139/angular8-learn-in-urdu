import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directvies-practice',
  templateUrl: './directvies-practice.component.html',
  styleUrls: ['./directvies-practice.component.css']
})
export class DirectviesPracticeComponent implements OnInit {

  testObj = {id:6, name:"testing", price:100};

  selectedCountry: string = "0";

  persons = [
    {id:1,name:"bilal"},
    {id:2,name:"bilal2"},
    {id:3,name:"bilal3"},
  ];

  showdiv = false;
  color = "green";

  constructor() { }

  ngOnInit() {
  }

  changeCountry(v){
    this.selectedCountry  = v.target.value;
  }
  getColor():string{
    if(this.testObj.id > 5)
      return "green";
    else
      return "grey";
  }
  getColorObj():Object{
    if(this.testObj.id > 5)
      return {'background-color':'red','color':'blue'};
    else
    return {'background-color':'yellow'};
  }

}
