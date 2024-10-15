import express from 'express';
import multer from 'multer';
import {  saveFirmDetails, updateFirmDetails } from '../controllers/firm.controller.js';


const router = express.Router();

// Configure multer for handling multipart/form-data
const storage = multer.memoryStorage();
const upload = multer({ storage });

// Define route for saving firm details
router.post("/savefirmdetails",upload.single('logo'),saveFirmDetails);
router.put("/updatefirmdetails/:id", upload.single('logo'), updateFirmDetails);


export default router;






// router.post("/savefirmdetails",saveFirmDetails)
// router.put("/updatefirmdetails",updateFirmDetails)