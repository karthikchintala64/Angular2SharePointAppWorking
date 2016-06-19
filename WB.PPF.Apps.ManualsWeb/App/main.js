"use strict";
//angular imports
const platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
const common_1 = require('@angular/common');
const app_routes_1 = require('./app.routes');
const http_1 = require('@angular/http');
const core_1 = require('@angular/core');
// project imports
const app_1 = require("./app");
// Extend Observable throughout the app
require('rxjs/add/operator/map');
require('rxjs/add/operator/mergeMap');
require('rxjs/add/observable/of');
require('rxjs/add/operator/do');
require('rxjs/add/operator/toPromise');
core_1.enableProdMode();
platform_browser_dynamic_1.bootstrap(app_1.AppComponent, [
    app_routes_1.APP_ROUTER_PROVIDERS,
    http_1.HTTP_PROVIDERS,
    { provide: common_1.LocationStrategy, useClass: common_1.HashLocationStrategy }
])
    .catch(err => console.error(err));
//# sourceMappingURL=main.js.map