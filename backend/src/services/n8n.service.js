import axios from 'axios';
import { AppError } from '../utils/AppError.js';

const defaultClient = axios.create({
  timeout: 60_000,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  validateStatus: () => true,
});

/**
 * POST JSON payload to an n8n webhook URL.
 * n8n typically responds with 200 and a JSON body; non-2xx is mapped to AppError.
 *
 * @param {string} url Absolute webhook URL (from env or workflow)
 * @param {Record<string, unknown>} payload Serializable body
 * @param {{ timeoutMs?: number; headers?: Record<string, string>; signal?: AbortSignal }} [options]
 * @returns {Promise<unknown>} Parsed response body from n8n
 */
export async function postN8nWebhook(url, payload, options = {}) {
  if (!url || typeof url !== 'string') {
    throw new AppError('Webhook URL is missing or invalid', 500, { isOperational: true });
  }

  try {
    const response = await defaultClient.post(url, payload, {
      timeout: options.timeoutMs ?? 60_000,
      headers: { ...options.headers },
      signal: options.signal,
    });

    if (response.status >= 200 && response.status < 300) {
      return response.data;
    }

    const upstream = response.data;
    const message =
      typeof upstream?.message === 'string'
        ? upstream.message
        : `n8n webhook returned status ${response.status}`;

    const statusCode = response.status >= 500 ? 502 : 400;
    throw new AppError(message, statusCode, { details: upstream, isOperational: true });
  } catch (err) {
    if (err instanceof AppError) {
      throw err;
    }

    if (axios.isAxiosError(err)) {
      if (err.code === 'ECONNABORTED') {
        throw new AppError('Webhook request timed out', 504, { isOperational: true });
      }
      if (err.response) {
        throw new AppError('n8n webhook responded with an error', 502, {
          details: err.response.data,
          isOperational: true,
        });
      }
      throw new AppError('Failed to reach n8n webhook', 502, { isOperational: true });
    }

    throw err;
  }
}
