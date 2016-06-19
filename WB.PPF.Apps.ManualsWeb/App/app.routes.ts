import { provideRouter, RouterConfig } from '@angular/router';
import { UsersRoutes } from './users/user.routes';
import { ProductRoutes } from './products/products.routes';
import { WelcomeComponent } from './welcome';

export const routes: RouterConfig = [
    { path: '/Welcome', component: WelcomeComponent },
    ...UsersRoutes,
    ...ProductRoutes
];

export const APP_ROUTER_PROVIDERS = [
    provideRouter(routes)
];