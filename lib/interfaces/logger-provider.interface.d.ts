import { INgxLogger } from './ngx-logger.interface';
/**
 * Provides a service for returning a logger for a given key.
 */
export interface ILoggerProvider {
    logger(k: string): INgxLogger;
}
//# sourceMappingURL=logger-provider.interface.d.ts.map