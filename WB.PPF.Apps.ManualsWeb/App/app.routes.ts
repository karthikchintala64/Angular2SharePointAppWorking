import { provideRouter, RouterConfig } from '@angular/router';
import { UsersList } from './users/usersList';
import { UsersRoutes } from './users/user.routes';

const routes: RouterConfig = [
    { path: '', component: UsersList },
];

export const APP_ROUTER_PROVIDERS = [
    provideRouter(routes)
];