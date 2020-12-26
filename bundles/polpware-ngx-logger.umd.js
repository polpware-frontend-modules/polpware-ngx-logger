(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
    typeof define === 'function' && define.amd ? define('@polpware/ngx-logger', ['exports'], factory) :
    (global = global || self, factory((global.polpware = global.polpware || {}, global.polpware['ngx-logger'] = {})));
}(this, (function (exports) { 'use strict';

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

    exports.NgxLoggerImpl = NgxLoggerImpl;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=polpware-ngx-logger.umd.js.map
