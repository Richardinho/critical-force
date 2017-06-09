import { Injectable } from '@angular/core';
import { Subject }    from 'rxjs/Subject';

@Injectable()
export class MenuService {

    //  whether menu is open or not
    private menuOpenSource = new Subject<boolean>();

    //  whether the overlay is visible
    private overlayOpenSource = new Subject<boolean>();

    //  whether the main part of the menu is visible.
    private visibilitySource = new Subject<boolean>();

    menuOpen$ = this.menuOpenSource.asObservable();
    overlayOpen$ = this.overlayOpenSource.asObservable();
    visibility$ = this.visibilitySource.asObservable();

    makeVisible() {
        this.visibilitySource.next(true);
    }

    makeInvisible() {
        this.visibilitySource.next(false);
    }

    openMenu () {
        this.menuOpenSource.next(true);
    }

    closeMenu() {
        this.menuOpenSource.next(false);
    }

    openOverlay() {
        this.overlayOpenSource.next(true);
    }

    closeOverlay () {
        this.overlayOpenSource.next(false);
    }
}