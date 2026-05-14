import { Router } from 'express';
import { analyzeResumeHandler } from '../controllers/resume.controller.js';

const router = Router();

router.post('/analyze', analyzeResumeHandler);

export default router;
