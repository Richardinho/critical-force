import { Component , HostBinding } from '@angular/core';
import { transitionAnimation } from './animations';

@Component({
  templateUrl: './home.component.html',
  //styleUrls: ['./app.component.css']
  host: {
    '[@foo]' : '' },
  animations: [ transitionAnimation() ]
})
export class HomeComponent {


}