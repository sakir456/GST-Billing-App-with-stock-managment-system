import express from "express";
import { saveBankDetails, updateBankDetails } from "../controllers/bank.controller.js";
import { authUser } from "../middleware/authUser.js";

const router = express.Router();

router.post("/savebankdetails",authUser,saveBankDetails)
router.put("/updatebankdetails/:id",authUser,updateBankDetails )

export default router