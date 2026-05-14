/**
 * Wraps async Express handlers so rejected promises reach `next(err)`
 * and the centralized error middleware can respond consistently.
 *
 * @template {import('express').Request} Req
 * @template {import('express').Response} Res
 * @template {import('express').NextFunction} Next
 * @param {(req: Req, res: Res, next: Next) => Promise<unknown>} fn
 * @returns {import('express').RequestHandler}
 */
export function asyncHandler(fn) {
  return (req, res, next) => {
    Promise.resolve(fn(req, res, next)).catch(next);
  };
}
