import { trigger, animate, style, transition } from '@angular/animations';

export function routerTransition() {
    return trigger('routerTransition', [
        // route 'enter' transition
        transition(':enter', [
            // css styles at start of transition
            style({ opacity: 0 }),
             // animation and styles at end of transition
            animate('.3s', style({ opacity: 1 }))
        ])
    ]);
}

export function hostStyle() {
    return {
        '[@routerTransition]': '',
        '[style.display]': '"block"',

        // '[style.position]': '"absolute"'
    };
}
