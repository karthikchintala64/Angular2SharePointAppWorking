//angular imports
import { bootstrap } from '@angular/platform-browser-dynamic';
import { Location, LocationStrategy, HashLocationStrategy } from '@angular/common';
import { APP_ROUTER_PROVIDERS } from './app.routes';
import { HTTP_PROVIDERS } from '@angular/http';
import { Title } from '@angular/platform-browser';
import { enableProdMode } from '@angular/core';

// project imports
import { AppComponent } from "./app";

// Extend Observable throughout the app
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/toPromise';


enableProdMode();

bootstrap(AppComponent, [
    APP_ROUTER_PROVIDERS,
    HTTP_PROVIDERS,
    { provide: LocationStrategy, useClass: HashLocationStrategy }
])
    .catch(err => console.error(err));