(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('@polpware/ngx-logger', ['exports', '@angular/core'], factory) :
    (global = global || self, factory((global.polpware = global.polpware || {}, global.polpware['ngx-logger'] = {}), global.ng.core));
}(this, (function (exports, core) { 'use strict';

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
        NgxLoggerImpl.ɵprov = core.ɵɵdefineInjectable({ token: NgxLoggerImpl, factory: NgxLoggerImpl.ɵfac, providedIn: 'root' });
        return NgxLoggerImpl;
    }());
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(NgxLoggerImpl, [{
            type: core.Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], null, null); })();

    exports.NgxLoggerImpl = NgxLoggerImpl;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=polpware-ngx-logger.umd.js.map
