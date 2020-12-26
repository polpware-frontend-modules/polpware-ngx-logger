import { INgxLogger } from '../interfaces/ngx-logger.interface';
/**
 * We on purpose do not make this class to have a root provider.
 * So that the application feels free to set up it.
 */
export declare class NgxLoggerImpl implements INgxLogger {
    trace(message: any, ...additional: any[]): void;
    debug(message: any, ...additional: any[]): void;
    info(message: any, ...additional: any[]): void;
    log(message: any, ...additional: any[]): void;
    warn(message: any, ...additional: any[]): void;
    error(message: any, ...additional: any[]): void;
    fatal(message: any, ...additional: any[]): void;
}
