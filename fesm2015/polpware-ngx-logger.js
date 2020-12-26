import { ɵɵdefineInjectable, ɵsetClassMetadata, Injectable } from '@angular/core';

class NgxLoggerImpl {
    trace(message, ...additional) { }
    debug(message, ...additional) { }
    info(message, ...additional) { }
    log(message, ...additional) { }
    warn(message, ...additional) { }
    error(message, ...additional) { }
    fatal(message, ...additional) { }
}
NgxLoggerImpl.ɵfac = function NgxLoggerImpl_Factory(t) { return new (t || NgxLoggerImpl)(); };
NgxLoggerImpl.ɵprov = ɵɵdefineInjectable({ token: NgxLoggerImpl, factory: NgxLoggerImpl.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { ɵsetClassMetadata(NgxLoggerImpl, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], null, null); })();

/*
 * Public API Surface of ngx-logger
 */

/**
 * Generated bundle index. Do not edit.
 */

export { NgxLoggerImpl };
//# sourceMappingURL=polpware-ngx-logger.js.map
