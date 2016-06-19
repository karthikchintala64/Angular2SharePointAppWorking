import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
@Component({
    selector: 'app-main',
    templateUrl:'./app/app.html',
    directives: [ROUTER_DIRECTIVES]
})

export class AppComponent {

    activateTab(elem: Element) {
        elem.className = 'active';
    }
    deactivateTab(elem: Element) {
        elem.className = '';
    }
}