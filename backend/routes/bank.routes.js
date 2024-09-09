import express from "express";
import { saveBankDetails, updateBankDetails } from "../controllers/bank.controller.js";

const router = express.Router();

router.post("/savebankdetails",saveBankDetails)
router.put("/updatebankdetails/:id",updateBankDetails )

export default router