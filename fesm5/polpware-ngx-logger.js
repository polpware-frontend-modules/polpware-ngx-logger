import { ɵɵdefineInjectable, ɵsetClassMetadata, Injectable } from '@angular/core';

var NgxLoggerImpl = /** @class */ (function () {
    function NgxLoggerImpl() {
    }
    NgxLoggerImpl.prototype.trace = function (message) {
        var additional = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            additional[_i - 1] = arguments[_i];
        }
    };
    NgxLoggerImpl.prototype.debug = function (message) {
        var additional = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            additional[_i - 1] = arguments[_i];
        }
    };
    NgxLoggerImpl.prototype.info = function (message) {
        var additional = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            additional[_i - 1] = arguments[_i];
        }
    };
    NgxLoggerImpl.prototype.log = function (message) {
        var additional = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            additional[_i - 1] = arguments[_i];
        }
    };
    NgxLoggerImpl.prototype.warn = function (message) {
        var additional = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            additional[_i - 1] = arguments[_i];
        }
    };
    NgxLoggerImpl.prototype.error = function (message) {
        var additional = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            additional[_i - 1] = arguments[_i];
        }
    };
    NgxLoggerImpl.prototype.fatal = function (message) {
        var additional = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            additional[_i - 1] = arguments[_i];
        }
    };
    NgxLoggerImpl.ɵfac = function NgxLoggerImpl_Factory(t) { return new (t || NgxLoggerImpl)(); };
    NgxLoggerImpl.ɵprov = ɵɵdefineInjectable({ token: NgxLoggerImpl, factory: NgxLoggerImpl.ɵfac, providedIn: 'root' });
    return NgxLoggerImpl;
}());
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
