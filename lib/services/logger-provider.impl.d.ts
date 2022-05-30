import { ILoggerProvider } from '../interfaces/logger-provider.interface';
import { NgxLoggerImpl } from './ngx-logger.impl';
/**
 * We on purpose do not make this class to have a root provider.
 * So that the application feels free to set up it.
 */
export declare class LoggerProviderImpl implements ILoggerProvider {
    defaultImpl: NgxLoggerImpl;
    logger(k: string): NgxLoggerImpl;
}
//# sourceMappingURL=logger-provider.impl.d.ts.map