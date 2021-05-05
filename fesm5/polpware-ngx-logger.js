import { ɵɵdefineNgModule, ɵɵdefineInjector, ɵsetClassMetadata, NgModule } from '@angular/core';

/**
 * We on purpose do not make this class to have a root provider.
 * So that the application feels free to set up it.
 */
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
    return NgxLoggerImpl;
}());

/**
 * We on purpose do not make this class to have a root provider.
 * So that the application feels free to set up it.
 */
var LoggerProviderImpl = /** @class */ (function () {
    function LoggerProviderImpl() {
        this.defaultImpl = new NgxLoggerImpl();
    }
    LoggerProviderImpl.prototype.logger = function (k) {
        return this.defaultImpl;
    };
    return LoggerProviderImpl;
}());

var NgxLoggerModule = /** @class */ (function () {
    function NgxLoggerModule() {
    }
    NgxLoggerModule.ɵmod = ɵɵdefineNgModule({ type: NgxLoggerModule });
    NgxLoggerModule.ɵinj = ɵɵdefineInjector({ factory: function NgxLoggerModule_Factory(t) { return new (t || NgxLoggerModule)(); }, imports: [[]] });
    return NgxLoggerModule;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(NgxLoggerModule, [{
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
//# sourceMappingURL=polpware-ngx-logger.js.map
