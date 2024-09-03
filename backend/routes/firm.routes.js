

import express from 'express';
import multer from 'multer';
import { saveFirmDetails } from '../controllers/firm.controller.js';


const router = express.Router();

// Configure multer for handling multipart/form-data
const storage = multer.memoryStorage();
const upload = multer({ storage });

// Define route for saving firm details
router.post("/savefirmdetails",upload.single('logo'),saveFirmDetails);

export default router;






// router.post("/savefirmdetails",saveFirmDetails)
// router.put("/updatefirmdetails",updateFirmDetails)