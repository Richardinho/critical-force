import { Component , HostBinding } from '@angular/core';
import { MenuService } from './menu-service';

import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

function pageSlideAnimation () {

  return trigger('menuOpenState', [
    state('closed', style({
      transform : 'translateX(0)',
      width : '100%'
    })),
    state('open', style({
      transform : 'translateX(500px)',
      width : '100%'
    })),
    transition('closed <=> open', animate('600ms ease-out'))
  ]);
}

@Component({

    template : `
        <div class="content">
            <router-outlet></router-outlet>
            <div [class.overlay]="isOverlay"></div>
        </div>
    `,
    styleUrls : ['./main.component.css'],
    animations: [
        pageSlideAnimation()
    ]
})

export class MainComponent {

  @HostBinding('@menuOpenState') menuOpenState = 'closed';

  isOverlay:boolean = false;

  constructor(private menuService: MenuService) {}

  ngOnInit() {

    // todo unsubscribe on component destruction

    this.menuService.menuOpen$.subscribe(open => {
        this.menuOpenState = open ? 'open' : 'closed';
    });

    this.menuService.overlayOpen$.subscribe(open => {
        if (open) {
            this.isOverlay = true;
        } else {
            this.isOverlay = false;
        }
    });
  }

}