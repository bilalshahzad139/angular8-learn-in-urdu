import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularApp3';
  sizerDefaultSize = 20;

  sizeHandler($event){
    alert($event.size);
  }
}
