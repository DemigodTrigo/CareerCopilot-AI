import { env } from '../config/env.js';
import { postN8nWebhook } from '../services/n8n.service.js';
import { AppError } from '../utils/AppError.js';

/**
 * Resume Doctor agent: validates input, shapes payload for n8n,
 * and triggers the configured webhook for analysis / scoring workflows.
 */

/**
 * @param {{ resumeText?: unknown; jobDescription?: unknown; metadata?: unknown }} body
 * @returns {{ resumeText: string; jobDescription: string | null; metadata: Record<string, unknown> }}
 */
export function buildResumeAnalysisPayload(body) {
  if (!body || typeof body !== 'object') {
    throw new AppError('Request body must be a JSON object', 400);
  }

  const { resumeText, jobDescription, metadata } = body;

  if (typeof resumeText !== 'string' || !resumeText.trim()) {
    throw new AppError('Field "resumeText" is required and must be a non-empty string', 400);
  }

  let jobDescriptionValue = null;
  if (jobDescription !== undefined && jobDescription !== null) {
    if (typeof jobDescription !== 'string') {
      throw new AppError('Field "jobDescription" must be a string when provided', 400);
    }
    const trimmed = jobDescription.trim();
    jobDescriptionValue = trimmed.length > 0 ? trimmed : null;
  }

  let meta = {};
  if (metadata !== undefined && metadata !== null) {
    if (typeof metadata !== 'object' || Array.isArray(metadata)) {
      throw new AppError('Field "metadata" must be a plain object when provided', 400);
    }
    meta = { ...metadata };
  }

  return {
    resumeText: resumeText.trim(),
    jobDescription: jobDescriptionValue,
    metadata: meta,
  };
}

/**
 * Runs the Resume Doctor analysis by delegating to n8n (orchestration, LLM nodes, etc.).
 *
 * @param {{ resumeText?: unknown; jobDescription?: unknown; metadata?: unknown }} body
 * @returns {Promise<unknown>} n8n workflow output (shape depends on your workflow)
 */
export async function analyzeResume(body) {
  const normalized = buildResumeAnalysisPayload(body);
  const webhookUrl = env.n8n.webhooks.resumeAnalyze;

  if (!webhookUrl) {
    throw new AppError(
      'Resume analysis is not configured. Set N8N_WEBHOOK_RESUME_ANALYZE_URL in the environment.',
      503,
    );
  }

  const payload = {
    agent: 'resume_doctor',
    action: 'analyze',
    ...normalized,
    requestedAt: new Date().toISOString(),
  };

  return postN8nWebhook(webhookUrl, payload);
}
