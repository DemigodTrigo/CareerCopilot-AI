/**
 * Operational HTTP errors the API can return intentionally.
 * The global error handler maps these to JSON responses without leaking internals.
 */
export class AppError extends Error {
  /**
   * @param {string} message Human-safe message for clients
   * @param {number} [statusCode=500] HTTP status
   * @param {{ details?: unknown; isOperational?: boolean }} [options]
   */
  constructor(message, statusCode = 500, options = {}) {
    super(message);
    this.name = 'AppError';
    this.statusCode = statusCode;
    this.isOperational = options.isOperational !== false;
    this.details = options.details;
    Error.captureStackTrace?.(this, this.constructor);
  }
}
