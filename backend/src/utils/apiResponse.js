/**
 * Consistent JSON envelopes for success and error responses.
 */

/**
 * @param {import('express').Response} res
 * @param {unknown} [data]
 * @param {string} [message]
 * @param {number} [status]
 */
export function sendSuccess(res, data = null, message = 'OK', status = 200) {
  return res.status(status).json({
    success: true,
    message,
    data,
  });
}

/**
 * @param {import('express').Response} res
 * @param {number} status
 * @param {string} message
 * @param {unknown} [errors] Optional structured validation or upstream hints
 */
export function sendError(res, status, message, errors = null) {
  const body = {
    success: false,
    message,
  };
  if (errors !== null && errors !== undefined) {
    body.errors = errors;
  }
  return res.status(status).json(body);
}
