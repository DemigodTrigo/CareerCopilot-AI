import { analyzeResume } from '../agents/resumeDoctor.agent.js';
import { asyncHandler } from '../middleware/asyncHandler.js';
import { sendSuccess } from '../utils/apiResponse.js';

/**
 * POST /api/resume/analyze
 * Proxies structured resume content to n8n for multi-step analysis (ATS, scoring, feedback).
 */
export const analyzeResumeHandler = asyncHandler(async (req, res) => {
  const data = await analyzeResume(req.body);
  return sendSuccess(res, data, 'Resume analyzed successfully', 200);
});
