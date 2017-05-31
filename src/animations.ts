import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

export function transitionAnimation () {

    return trigger('foo', [

        transition(':enter', [
            style({
                transform: 'translateX(100%)',
                position:'fixed',
                width : '100%'
            }),
            animate('0.5s ease-in-out', style({
                transform: 'translateX(0%)'
            }))
        ]),
        transition(':leave', [
            style({
                transform: 'translateX(0%)',
                position:'fixed',
                width : '100%'

            }),
            animate('0.5s ease-in-out', style({
                transform: 'translateX(-100%)'
            }))
        ])
    ])
}