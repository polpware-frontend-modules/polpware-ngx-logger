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

/*
 * Public API Surface of ngx-logger
 */

/**
 * Generated bundle index. Do not edit.
 */

export { NgxLoggerImpl };
//# sourceMappingURL=polpware-ngx-logger.js.map
