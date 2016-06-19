import { provideRouter, RouterConfig } from '@angular/router';
import { UsersList } from './users/usersList'

export const routes: RouterConfig = [
    { path: '/crisis-center', component: UsersList  },
    { path: '/heroes', component: UsersList }
];

export const APP_ROUTER_PROVIDERS = [
    provideRouter(routes)
];