(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('@polpware/ngx-logger', ['exports', '@angular/core'], factory) :
    (global = global || self, factory((global.polpware = global.polpware || {}, global.polpware['ngx-logger'] = {}), global.ng.core));
}(this, (function (exports, core) { 'use strict';

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
        NgxLoggerModule.ɵmod = core.ɵɵdefineNgModule({ type: NgxLoggerModule });
        NgxLoggerModule.ɵinj = core.ɵɵdefineInjector({ factory: function NgxLoggerModule_Factory(t) { return new (t || NgxLoggerModule)(); }, imports: [[]] });
        return NgxLoggerModule;
    }());
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(NgxLoggerModule, [{
            type: core.NgModule,
            args: [{
                    declarations: [],
                    imports: [],
                    exports: []
                }]
        }], null, null); })();

    exports.LoggerProviderImpl = LoggerProviderImpl;
    exports.NgxLoggerImpl = NgxLoggerImpl;
    exports.NgxLoggerModule = NgxLoggerModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=polpware-ngx-logger.umd.js.map
