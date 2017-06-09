import { Component, HostBinding } from '@angular/core';
import { pageTransition } from '../animations';

@Component({
    template : `
        <cf-page-header></cf-page-header>
        <h2>Capabilities</h2>
        <cf-footer></cf-footer>
    `,
    animations : [
        pageTransition()
    ]
})
export class CapabilitiesComponent {

    @HostBinding('@pageTransition') pageTransition = true;
    @HostBinding('style.display') display = 'block';
}