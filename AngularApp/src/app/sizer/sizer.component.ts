import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sizer',
  templateUrl: './sizer.component.html',
  styleUrls: ['./sizer.component.css']
})
export class SizerComponent implements OnInit {

  @Input() size:number =0;
  @Output() sizeChange = new EventEmitter<Object>();
  constructor() { }

  ngOnInit() {
  }

  dec() {
    this.resize(-1);
  }
  inc() {
     this.resize(+1);
    }

  resize(delta:number){
    this.size = this.size + delta;
    if(this.size > 20){
      this.sizeChange.emit({size:10,type:1});
    }
  }
}
