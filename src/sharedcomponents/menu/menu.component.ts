import { Component, Output, EventEmitter } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';
import { Router } from '@angular/router';

import { MenuService } from '../../pages/menu-service';

function menuAnimations () {

    return trigger('menuItems', [

        state('open', style({
            opacity : 1,
        })),
        state('closed', style({
            opacity : 0,
        })),
        transition('closed => open', animate('.5s 500ms ease-in')),
        transition('open => closed', animate('500ms ease-in')),
    ])
}

function menuItemAnimations () {

    return trigger('menuItem', [
        state('visible', style({ opacity : 1 })),
        state('hidden', style({ opacity : 0 })),
        transition('visible <=> hidden', animate('500ms'))
    ]);
}

@Component({
    moduleId : '' + module.id,
    selector : 'cf-menu',
    templateUrl : './menu.component.html',
    styleUrls : ['./menu.component.css'],
    animations : [menuAnimations(), menuItemAnimations()]

})



export class MenuComponent {

    isExpanded: boolean = false;
    isVisible: boolean = false;

    items : {
        text: string;
        menuItemState: string,
        link: string }[] = [];

    menuItemsState: string = 'closed';

    constructor(private menuService: MenuService, private router: Router) {

        this.items = [
            { text : 'home',         link : '/',             menuItemState : 'hidden' },
            { text : 'capabilities', link : '/capabilities', menuItemState : 'hidden' },
            { text : 'work',         link : '/work',         menuItemState : 'hidden' },
        ];

    }

    ngOnInit() {


        this.menuService.visibility$.subscribe(visible => {
            if (visible) {
                this.isVisible = true;
            } else {
                this.isVisible = false;
            }
        });

    }

    onMenuItemClick(url: string) {

        this.menuService.openOverlay();

        this.unexpandMenuItemsList().then(() => {
            this.menuService.closeMenu();
            this.router.navigate([url]);
            this.isExpanded = false;
        });

    }


    expandMenuItemsList(): Promise<boolean> {

        return new Promise(resolve => {
            let foo = (count: any) => {
                if (!!count) {
                    setTimeout(() => {
                        this.items[this.items.length - count].menuItemState = 'visible'
                        foo(count - 1);
                    }, 400);
                } else {

                    resolve(true);

                }
            }
            foo(this.items.length || 0);
        });
    }

    unexpandMenuItemsList(): Promise<boolean> {
        return new Promise(resolve => {
            let bar = (count: any) => {
                if (!!count) {
                    this.items[count - 1].menuItemState = 'hidden'
                    setTimeout(() => {
                        bar(count - 1);
                    }, 400);
                } else {
                    resolve(true);
                }
            }
            bar(this.items.length || 0);
        });

    }

    onClick () {

        if (this.isExpanded) {

            this.unexpandMenuItemsList().then(() => {
                this.menuService.closeMenu();
                this.isExpanded = false;
            });

        } else {
            //  make main part of menu visible
            this.menuService.makeVisible();
            this.isExpanded = true;
            this.menuService.openMenu();
            this.expandMenuItemsList();
        }
    }
}