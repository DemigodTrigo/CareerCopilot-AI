/**
 * Process entry: loads environment (via config), creates the Express app, and binds the HTTP server.
 */
import { createApp } from './app.js';
import { env } from './config/env.js';

const app = createApp();

const server = app.listen(env.port, () => {
  // eslint-disable-next-line no-console -- intentional boot log
  console.log(`CareerCopilot API listening on port ${env.port} (${env.nodeEnv})`);
});

const shutdown = (signal) => {
  // eslint-disable-next-line no-console
  console.log(`${signal} received, closing HTTP server…`);
  server.close(() => process.exit(0));
};

process.on('SIGTERM', () => shutdown('SIGTERM'));
process.on('SIGINT', () => shutdown('SIGINT'));
