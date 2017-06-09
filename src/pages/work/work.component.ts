import { Component, HostBinding } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

import { pageTransition } from '../animations';

@Component({

    template : `
        <cf-page-header></cf-page-header>
        <h2>This is the work page</h2>
        <cf-footer></cf-footer>
    `,
    animations : [
        pageTransition()
    ]

})

export class WorkComponent {
    @HostBinding('@pageTransition') pageTransition = true;
    @HostBinding('style.display') display = 'block';
}