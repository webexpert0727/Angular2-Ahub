import { Router } from '@angular/router';
import { Component } from '@angular/core';

@Component({
    selector: 'appc-menu',
    styleUrls: ['./menu.component.scss'],
    templateUrl: './menu.component.html'
})
export class MenuComponent {
    path: any;
    aaa: any;
    constructor(public router: Router) {
        router.events.subscribe((val) => {

            this.path = val;

        });
    }
    activateRoute(t: any) {
        debugger;
    }
}
