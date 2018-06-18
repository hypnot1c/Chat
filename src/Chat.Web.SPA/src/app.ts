import { autoinject } from 'aurelia-framework';
import { Router, RouterConfiguration, RouteConfig } from 'aurelia-router';
import { OpenIdConnect } from "aurelia-open-id-connect";
import { EventAggregator } from 'aurelia-event-aggregator';
import { HttpClient } from 'aurelia-fetch-client';

import appConfig from 'config/app-config';
import routeConfig from 'config/app-route-config';
import { AppHttpInterceptor } from 'config/http-config';

@autoinject
export class App {

    constructor(
        private router: Router,
        private openIdConnect: OpenIdConnect,
        private http: HttpClient,
        private httpInterceptor: AppHttpInterceptor,
    ) {
        this.configureHttpClient();
    }

    activate() {
    }

    attached() {
    }

    configureHttpClient() {
        this.http.configure(c => {
            let defaults: any = {
                credentials: 'same-origin',
                headers: {
                    'Accept': 'application/json',
                    'X-Requested-With': 'Fetch',
                }
            };

            c.withBaseUrl(`${appConfig.ApiHost}/`);
            c.withDefaults(defaults);
            c.withInterceptor(this.httpInterceptor);
        });
    }

    configureRouter(config: RouterConfiguration, router: Router) {
        config.title = 'Chat';

        config.map(routeConfig.routes);

        config.mapUnknownRoutes(({ redirect: '/error/not-found' } as RouteConfig));
        config.fallbackRoute('error');

        this.openIdConnect.configure(config);
        this.router = router;
    }
}