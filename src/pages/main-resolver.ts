import { Injectable } from '@angular/core';
import {
    Router,
    Resolve,
    RouterStateSnapshot,
    ActivatedRouteSnapshot } from '@angular/router';
import { MenuService } from './menu-service';

@Injectable()
export class MainResolver implements Resolve<string> {

  constructor(private router: Router, private menuService: MenuService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<string> {

    return new Promise(resolve => {

        setTimeout(() => {
            this.menuService.closeOverlay();
            resolve('richard is great');
        }, 1000);
    });
  }
}
