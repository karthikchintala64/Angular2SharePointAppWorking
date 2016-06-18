"use strict";
const platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
const app_1 = require("./app");
const app_routes_1 = require('./app.routes');
platform_browser_dynamic_1.bootstrap(app_1.AppComponent, [
    app_routes_1.APP_ROUTER_PROVIDERS
])
    .catch(err => console.error(err));
//# sourceMappingURL=main.js.map