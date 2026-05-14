import cors from 'cors';
import express from 'express';
import { env } from './config/env.js';
import { errorHandler } from './middleware/errorHandler.js';
import resumeRoutes from './routes/resume.routes.js';
import { sendError } from './utils/apiResponse.js';

/**
 * Builds the Express application (routes + middleware) without listening.
 * Keeps HTTP bootstrapping testable and reusable across server / serverless adapters.
 *
 * @returns {import('express').Express}
 */
export function createApp() {
  const app = express();

  app.disable('x-powered-by');

  const corsOptions =
    env.corsOrigin === '*'
      ? { origin: true, credentials: true }
      : {
          origin: env.corsOrigin.split(',').map((o) => o.trim()),
          credentials: true,
        };

  app.use(cors(corsOptions));
  app.use(express.json({ limit: '1mb' }));

  app.get('/health', (_req, res) => {
    res.status(200).json({
      status: 'ok',
      service: 'career-copilot-api',
      environment: env.nodeEnv,
      timestamp: new Date().toISOString(),
    });
  });

  app.use('/api/resume', resumeRoutes);

  app.use((_req, res) => {
    return sendError(res, 404, 'Not found');
  });

  app.use(errorHandler);

  return app;
}
