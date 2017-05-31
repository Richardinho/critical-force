import { Component, HostBinding } from '@angular/core';
import { transitionAnimation } from './animations';

@Component({

    template : `
        <cf-menu></cf-menu>
        <cf-page-header></cf-page-header>
        <h2>This is the work page</h2>
    `,

    host: { '[@foo]' : ''  },

    animations: [ transitionAnimation() ]
})

export class WorkComponent {
}