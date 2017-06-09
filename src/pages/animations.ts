import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

export function pageTransition() {

    return trigger('pageTransition', [

      transition(':enter', [
        style({ opacity : 0, position : 'absolute', top : 0, left : 0, right : 0 }),
        animate('1s ease-in', style({
          opacity : 1
        }))
      ]),
      transition(':leave', [
        style({ position : 'absolute', top :  0 , left : 0, right : 0 }),
        animate('1s ease-out', style({
          opacity: 0
        }))
      ])
    ]);
}

