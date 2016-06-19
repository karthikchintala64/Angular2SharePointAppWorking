import { provideRouter, RouterConfig } from '@angular/router';
import { UsersRoutes } from './users/user.routes'
import { WelcomeComponent } from './welcome'

export const routes: RouterConfig = [
    { path: '/', component: WelcomeComponent },
    ...UsersRoutes
];

export const APP_ROUTER_PROVIDERS = [
    provideRouter(routes)
];