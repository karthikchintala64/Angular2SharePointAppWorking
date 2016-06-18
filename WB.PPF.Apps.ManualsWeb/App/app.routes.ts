import { provideRouter, RouterConfig } from '@angular/router';

import { UsersRoutes } from './users/user.routes';

const routes: RouterConfig = [
    ...UsersRoutes
];

export const APP_ROUTER_PROVIDERS = [
    provideRouter(routes)
];