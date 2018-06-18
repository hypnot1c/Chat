import { autoinject } from 'aurelia-framework';
import { Interceptor } from 'aurelia-fetch-client';
import { User } from "oidc-client";
import { OpenIdConnect } from "aurelia-open-id-connect";

@autoinject
export class AppHttpInterceptor implements Interceptor {

    constructor(
        private openIdConnect: OpenIdConnect,
    ) {
        this.openIdConnect.userManager.events.addAccessTokenExpiring(this.onAccessTokenExpiring.bind(this));
        this.UserLoad = this.openIdConnect.observeUser((user: User) => {
            this.User = user;
            this.AccessTokenRenewInProgress = false;
        });
    }

    private UserLoad: Promise<void>;
    private User: User;
    AccessTokenRenewInProgress: boolean;

    request(request: Request): Promise<Request> {
        return this.UserLoad
            .then(() => {
                if (!this.User || this.User.expired) {
                    return this.openIdConnect.loginSilent()
                        .catch((error) => {
                            console.log(error);
                            return this.openIdConnect.userManager.signinRedirect();
                        });
                }
            })
            .then(r => {
                request.headers.append('Authorization', `Bearer ${this.User.access_token}`);
                return request;
            });
    }

    responseError(error: any, request?: Request) {
        if (error instanceof Response) {
            let resp = error as Response;
            this.onResponseError(resp);
        }
        return Promise.reject(error);
    }

    onResponseError: Function

    onAccessTokenExpiring() {
        this.AccessTokenRenewInProgress = true;
    }
}