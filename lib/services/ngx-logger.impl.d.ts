import { INgxLogger } from '../interfaces/ngx-logger.interface';
import * as i0 from "@angular/core";
export declare class NgxLoggerImpl implements INgxLogger {
    trace(message: any, ...additional: any[]): void;
    debug(message: any, ...additional: any[]): void;
    info(message: any, ...additional: any[]): void;
    log(message: any, ...additional: any[]): void;
    warn(message: any, ...additional: any[]): void;
    error(message: any, ...additional: any[]): void;
    fatal(message: any, ...additional: any[]): void;
    static ɵfac: i0.ɵɵFactoryDef<NgxLoggerImpl, never>;
    static ɵprov: i0.ɵɵInjectableDef<NgxLoggerImpl>;
}
