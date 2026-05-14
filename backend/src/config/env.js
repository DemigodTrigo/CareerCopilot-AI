import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/**
 * Load variables from backend/.env before reading process.env.
 * Safe to import from any module; dotenv does not override existing env vars by default.
 */
dotenv.config({ path: path.resolve(__dirname, '../../.env') });

/**
 * Typed-ish view of configuration used across the app.
 * Extend this object as new features are added (auth, rate limits, etc.).
 */
export const env = Object.freeze({
  nodeEnv: process.env.NODE_ENV || 'development',
  port: Number.parseInt(process.env.PORT || '3000', 10) || 3000,
  /** CORS origin(s): comma-separated list or "*" */
  corsOrigin: process.env.CORS_ORIGIN || '*',
  n8n: Object.freeze({
    webhooks: Object.freeze({
      /** POST target for Resume Doctor / ATS-style analysis workflows */
      resumeAnalyze: process.env.N8N_WEBHOOK_RESUME_ANALYZE_URL || '',
    }),
  }),
});
