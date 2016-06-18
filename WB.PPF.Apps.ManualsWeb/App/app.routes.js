"use strict";
const router_1 = require('@angular/router');
const usersList_1 = require('./users/usersList');
const routes = [
    { path: '', component: usersList_1.UsersList },
];
exports.APP_ROUTER_PROVIDERS = [
    router_1.provideRouter(routes)
];
//# sourceMappingURL=app.routes.js.map