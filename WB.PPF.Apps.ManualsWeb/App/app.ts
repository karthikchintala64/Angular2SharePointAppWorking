import {Component} from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
@Component({
    selector: 'app-main',
    template: `<h1>test</h1>
 <nav>
      <a [routerLink]="['/heroes']">Users</a>
    </nav>
    <router-outlet></router-outlet>
`,
    directives: [ROUTER_DIRECTIVES]
})

export class AppComponent { }