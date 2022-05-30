import * as i0 from '@angular/core';
import { NgModule } from '@angular/core';

/**
 * We on purpose do not make this class to have a root provider.
 * So that the application feels free to set up it.
 */
class NgxLoggerImpl {
    trace(message, ...additional) { }
    debug(message, ...additional) { }
    info(message, ...additional) { }
    log(message, ...additional) { }
    warn(message, ...additional) { }
    error(message, ...additional) { }
    fatal(message, ...additional) { }
}

/**
 * We on purpose do not make this class to have a root provider.
 * So that the application feels free to set up it.
 */
class LoggerProviderImpl {
    constructor() {
        this.defaultImpl = new NgxLoggerImpl();
    }
    logger(k) {
        return this.defaultImpl;
    }
}

class NgxLoggerModule {
}
NgxLoggerModule.ɵfac = function NgxLoggerModule_Factory(t) { return new (t || NgxLoggerModule)(); };
NgxLoggerModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: NgxLoggerModule });
NgxLoggerModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [[]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(NgxLoggerModule, [{
        type: NgModule,
        args: [{
                declarations: [],
                imports: [],
                exports: []
            }]
    }], null, null); })();

/*
 * Public API Surface of ngx-logger
 */

/**
 * Generated bundle index. Do not edit.
 */

export { LoggerProviderImpl, NgxLoggerImpl, NgxLoggerModule };
//# sourceMappingURL=polpware-ngx-logger.mjs.map
