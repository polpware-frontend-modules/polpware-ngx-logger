import * as i0 from '@angular/core';

/**
 * The most general interfaces for a logger.
 */
interface INgxLogger {
    trace(message: any, ...additional: any[]): void;
    debug(message: any, ...additional: any[]): void;
    info(message: any, ...additional: any[]): void;
    log(message: any, ...additional: any[]): void;
    warn(message: any, ...additional: any[]): void;
    error(message: any, ...additional: any[]): void;
    fatal(message: any, ...additional: any[]): void;
}

/**
 * Provides a service for returning a logger for a given key.
 */
interface ILoggerProvider {
    logger(k: string): INgxLogger;
}

/**
 * We on purpose do not make this class to have a root provider.
 * So that the application feels free to set up it.
 */
declare class NgxLoggerImpl implements INgxLogger {
    trace(message: any, ...additional: any[]): void;
    debug(message: any, ...additional: any[]): void;
    info(message: any, ...additional: any[]): void;
    log(message: any, ...additional: any[]): void;
    warn(message: any, ...additional: any[]): void;
    error(message: any, ...additional: any[]): void;
    fatal(message: any, ...additional: any[]): void;
}

/**
 * We on purpose do not make this class to have a root provider.
 * So that the application feels free to set up it.
 */
declare class LoggerProviderImpl implements ILoggerProvider {
    defaultImpl: NgxLoggerImpl;
    logger(k: string): NgxLoggerImpl;
}

declare class NgxLoggerModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<NgxLoggerModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<NgxLoggerModule, never, never, never>;
    static ɵinj: i0.ɵɵInjectorDeclaration<NgxLoggerModule>;
}

export { LoggerProviderImpl, NgxLoggerImpl, NgxLoggerModule };
export type { ILoggerProvider, INgxLogger };
//# sourceMappingURL=polpware-ngx-logger.d.ts.map
