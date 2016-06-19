"use strict";
const router_1 = require('@angular/router');
const usersList_1 = require('./users/usersList');
exports.routes = [
    { path: '/crisis-center', component: usersList_1.UsersList },
    { path: '/heroes', component: usersList_1.UsersList }
];
exports.APP_ROUTER_PROVIDERS = [
    router_1.provideRouter(exports.routes)
];
//# sourceMappingURL=app.routes.js.map