import { Component, HostBinding } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

import { pageTransition } from '../animations';

@Component({
  templateUrl: './home.component.html',
  //styleUrls: ['./app.component.css']
  animations : [
    pageTransition()
  ]
})
export class HomeComponent {

  @HostBinding('@pageTransition') pageTransition = true;
  @HostBinding('style.display') display = 'block';

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.data
      .subscribe((data: { foobar: string }) => {
        console.log(data.foobar);
      });
  }
}