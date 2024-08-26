import express from "express";
import { saveFirmDetails, updateFirmDetails } from "../controllers/firm.controller.js";


const router = express.Router();

router.post("/savefirmdetails",saveFirmDetails)
router.put("/updatefirmdetails",updateFirmDetails)

export default router