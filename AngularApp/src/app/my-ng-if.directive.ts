import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';


@Directive({
  selector: '[appMyNgIf]'
})
export class MyNgIfDirective {

  constructor(private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef) { }

  @Input() set appMyNgIf(show:boolean){
    debugger;
    if (show) {
		  this.viewContainer.createEmbeddedView(this.templateRef);
	   } else {
		  this.viewContainer.clear();
	  }
  }



}
