import './polyfills';
import './styles/vendor.css';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/first';
import 'rxjs/add/operator/mapTo';
import 'rxjs/add/operator/scan';
import 'rxjs/add/operator/bufferCount';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/finally';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/interval';
import 'rxjs/add/observable/throw';
import 'rxjs/add/observable/merge';


declare const module: any;

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';

import { AppModule } from './app/app.module';
/*import { type } from "./app/util/action-name-helper";*/

// Enable either Hot Module Reloading or production mode
/* tslint:disable */
if (module['hot']) {
    module['hot'].accept();
    module['hot'].dispose(() => { });
} else {
    enableProdMode();
}

//import './styles/app-assets/js/core/libraries/jquery.min.js';
//import './styles/app-assets/vendors/js/ui/tether.min.js';
//import './styles/app-assets/js/core/libraries/bootstrap.min.js';
//import './styles/app-assets/vendors/js/ui/perfect-scrollbar.jquery.min.js';
//import './styles/app-assets/vendors/js/ui/unison.min.js';
//import './styles/app-assets/vendors/js/ui/jquery-sliding-menu.js';
//import './styles/app-assets/js/core/app-menu.js';
//import './styles/app-assets/js/core/app.js';

platformBrowserDynamic().bootstrapModule(AppModule);
