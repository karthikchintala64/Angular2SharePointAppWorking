"use strict";
const router_1 = require('@angular/router');
const user_routes_1 = require('./users/user.routes');
const products_routes_1 = require('./products/products.routes');
const welcome_1 = require('./welcome');
exports.routes = [
    { path: '/Welcome', component: welcome_1.WelcomeComponent },
    ...user_routes_1.UsersRoutes,
    ...products_routes_1.ProductRoutes
];
exports.APP_ROUTER_PROVIDERS = [
    router_1.provideRouter(exports.routes)
];
//# sourceMappingURL=app.routes.js.map