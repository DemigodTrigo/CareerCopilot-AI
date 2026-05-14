import { env } from '../config/env.js';
import { AppError } from '../utils/AppError.js';
import { sendError } from '../utils/apiResponse.js';

/**
 * Express error-handling middleware (4 arguments).
 * Maps AppError and unexpected errors to stable JSON + correct status codes.
 *
 * @type {import('express').ErrorRequestHandler}
 */
// eslint-disable-next-line no-unused-vars -- Express requires arity-4 signature
export function errorHandler(err, req, res, next) {
  const isAppError = err instanceof AppError;
  const statusFromErr =
    typeof err.statusCode === 'number' && err.statusCode >= 400 && err.statusCode < 600
      ? err.statusCode
      : typeof err.status === 'number' && err.status >= 400 && err.status < 600
        ? err.status
        : 500;

  const status = isAppError ? err.statusCode : statusFromErr;
  const exposeMessage = isAppError || err.expose === true;

  const clientMessage = exposeMessage
    ? err.message || 'Request failed'
    : 'Internal server error';

  if (status >= 500 && env.nodeEnv !== 'test') {
    console.error('[error]', err);
  }

  const details =
    isAppError && err.details !== undefined ? err.details : env.nodeEnv === 'development' && !exposeMessage
      ? { name: err.name }
      : null;

  return sendError(res, status, clientMessage, details);
}
