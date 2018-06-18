import { OpenIdConnectConfiguration } from "aurelia-open-id-connect";
import { UserManagerSettings, WebStorageStateStore, Log } from "oidc-client";

import appConfig from './app-config';

export default {
    logLevel: appConfig.AuthService.logLevel,
    loginRedirectRoute: "login",
    logoutRedirectRoute: "login",
    unauthorizedRedirectRoute: "login",
    userManagerSettings: {

        // The number of seconds in advance of access token expiry
        // to raise the access token expiring event.
        accessTokenExpiringNotificationTime: 1,

        authority: appConfig.AuthService.authority,

        automaticSilentRenew: true,

        // IdentityServer4 supports OpenID Connect Session Management
        // https://openid.net/specs/openid-connect-session-1_0.html
        monitorSession: true,
        checkSessionInterval: 2000,

        // The client or application ID that the authority issues.
        client_id: appConfig.AuthService.clientId,
        //prompt: 'login',
        filterProtocolClaims: true,
        loadUserInfo: false,
        post_logout_redirect_uri: appConfig.AuthService.postLogoutRedirectUri,
        redirect_uri: appConfig.AuthService.redirectUri,
        response_type: appConfig.AuthService.responseType,
        scope: appConfig.AuthService.scope,
        // number of millisecods to wait for the authorization
        // server to response to silent renew request
        silentRequestTimeout: 10000,
        silent_redirect_uri: appConfig.AuthService.silentRedirectUri,
        userStore: new WebStorageStateStore({
            prefix: appConfig.AuthService.storagePrefix,
            store: window.localStorage,
        }),
    } as UserManagerSettings,
} as OpenIdConnectConfiguration;