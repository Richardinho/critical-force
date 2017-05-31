import { Component } from '@angular/core';

@Component({
    selector : 'cf-menu',
    template : `
        <div class="menu">
            <ul>
                <li><a routerLink="">home</a></li>
                <li><a routerLink="work">work</a></li>
                <li><a routerLink="capabilities">capabilities</a></li>
            </ul>
        </div>
    `
})

export class MenuComponent {}