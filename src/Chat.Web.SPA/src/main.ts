import * as Bluebird from 'bluebird';
import { Aurelia, PLATFORM } from 'aurelia-framework';
import * as LogManager from 'aurelia-logging';
import { ConsoleAppender } from 'aurelia-logging-console';
import { Log } from "oidc-client";

import appConfig from 'config/app-config';
import oidcConfig from 'config/open-id-config';
import { Environment } from 'config/environment';

//Configure Bluebird Promises.
//Note: You may want to use environment-specific configuration.
Bluebird.config({ warnings: { wForgottenReturn: false } });

export function configure(aurelia: Aurelia) {
    let aureliaConfig = aurelia.use.standardConfiguration()

    let logger = LogManager.getLogger('Oidc');
    if (appConfig.Environment < Environment.PROD) {
        logger.setLevel(LogManager.logLevel.debug);
        aureliaConfig = aureliaConfig.developmentLogging();
    }
    else {
        LogManager.addAppender(new ConsoleAppender());
        LogManager.setLevel(LogManager.logLevel.warn);
        logger.setLevel(LogManager.logLevel.warn);
    }
    Log.logger = logger;

    aureliaConfig
        .plugin(PLATFORM.moduleName('aurelia-open-id-connect'), () => oidcConfig)
        ;

    aurelia.start().then(() => aurelia.setRoot(PLATFORM.moduleName('app')));
}
