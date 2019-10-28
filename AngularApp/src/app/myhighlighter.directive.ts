import { Directive, ElementRef, OnInit, Input } from '@angular/core';

@Directive({
  selector: '[appMyhighlighter]'
})
export class MyhighlighterDirective  implements OnInit{

  @Input() color:string = "red";

  constructor(private testElement: ElementRef) {

  }

  ngOnInit(){
    this.testElement.nativeElement.style.backgroundColor = this.color;
  }

}
