import express from 'express';
import multer from 'multer';
import {  saveFirmDetails, updateFirmDetails } from '../controllers/firm.controller.js';
import { authUser } from '../middleware/authUser.js';


const router = express.Router();


const storage = multer.memoryStorage();
const upload = multer({ storage });


router.post("/savefirmdetails",upload.single('logo'),authUser,saveFirmDetails);
router.put("/updatefirmdetails/:id", upload.single('logo'),authUser, updateFirmDetails);


export default router;






// router.post("/savefirmdetails",saveFirmDetails)
// router.put("/updatefirmdetails",updateFirmDetails)