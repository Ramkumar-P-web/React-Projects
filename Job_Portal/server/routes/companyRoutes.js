import express from 'express';
import { changeJobApplicationStatus, changeJobVisiblity, getCompanyData, getCompanyJobApplicants, getCompanyPostedJobs, loginCompany, postJob, registerCompany } from '../controllers/companyController.js';
import upload from '../config/multer.js';
import { protectCompany } from '../middlewares/authMiddleware.js';

const router = express.Router();

// Rejister Company

router.post('/register',upload.single('image'),registerCompany);

// Login Company

router.post('/login',loginCompany);

// Get Company data

router.get('/',protectCompany,getCompanyData);

//Post a Job

router.post('/post-job',protectCompany,postJob);

//Get applied Applicants

router.get('/applicants',protectCompany,getCompanyJobApplicants);

//Get Posted Jobs

router.get('/list-jobs',protectCompany,getCompanyPostedJobs);

//Change Application Status

router.post('/change-status',protectCompany,changeJobApplicationStatus);

//Change Applications Visiblity

router.post('/change-visiblity',protectCompany,changeJobVisiblity);

export default router;