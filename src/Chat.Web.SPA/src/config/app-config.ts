import { Log } from "oidc-client";
import { IHttpConnectionOptions, HttpTransportType, LogLevel } from '@aspnet/signalr';

import { Environment } from './environment';

const appHost = "http://localhost:3000";
//const appHost = "https://localhost:44382";

const appConfig = {
    Environment: Environment.DEV,
    AppHost: appHost,

    ApiHost: "http://localhost:51175",

    SignalR: {
        HubRoot: 'hub',
        ConnectionOptions: {
            transport: HttpTransportType.WebSockets,
            logger: LogLevel.Debug
        } as IHttpConnectionOptions
    },

    WinTeamSearchApiHost: "https://search.winteam.io/test",

    AuthService: {
        storagePrefix: "dev-",
        logLevel: Log.DEBUG,
        authority: "https://test-auth.winteam.io",
        clientId: "Chat-SPA-DEV",
        redirectUri: `${appHost}/auth/signincallback`,
        postLogoutRedirectUri: `${appHost}/auth/signoutcallback`,
        silentRedirectUri: `${appHost}/auth/silentrenew`,
        responseType: "id_token token",
        scope: "openid email profile wplapi wplapisearch",
    }

}

export default appConfig;