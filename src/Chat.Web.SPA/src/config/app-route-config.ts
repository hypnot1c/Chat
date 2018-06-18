import { PLATFORM } from 'aurelia-pal';
import { OpenIdConnectRoles } from "aurelia-open-id-connect";

import { RouteConfig } from "aurelia-router";


let config: RouteConfig[] = [
    {
        route: 'login',
        name: 'login',
        moduleId: PLATFORM.moduleName('pages/auth/login', 'section/auth'),
        nav: false,
        title: 'Welcome'
    },
    {
        route: 'logout',
        name: 'logout',
        moduleId: PLATFORM.moduleName('pages/auth/logout', 'section/auth'),
        nav: false,
        title: 'Welcome'
    },
    {
        route: [''],
        name: 'root',
        moduleId: PLATFORM.moduleName('pages/main'),
        nav: false,
        title: 'Welcome',
        settings: {
            roles: [OpenIdConnectRoles.Everyone],
        }
    }
];

let fallbackRoute = {
    route: 'error',
    name: 'error',
    moduleId: PLATFORM.moduleName('pages/error/error-index', 'section/error'),
    nav: false,
    title: 'Error'
};


export default { routes: config, fallbackRoute: fallbackRoute };