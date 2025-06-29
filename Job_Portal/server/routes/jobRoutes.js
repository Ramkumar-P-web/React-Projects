import express from 'express';
import { getJobById, getJobs } from '../controllers/jobContoller.js';

const router = express.Router();

// Route to fetch all Job Posts
router.get('/',getJobs);

// Route to fetch Job post by Id
router.get('/:id',getJobById);

export default router;