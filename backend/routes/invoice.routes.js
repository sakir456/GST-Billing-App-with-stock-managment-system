import express from "express";
import { createInvoice, deleteInvoice, getChartData,  getInvoice, getInvoices, highestInvoice, updateInvoice } from "../controllers/invoice.controller.js";
import { authUser } from "../middleware/authUser.js";


const router = express.Router();

router.post("/createinvoice",authUser,createInvoice)
router.get("/getinvoices",authUser,getInvoices)
router.get("/getinvoice/:id",authUser,getInvoice);
router.put("/updateinvoice/:id",authUser,updateInvoice )
router.delete("/deleteinvoice/:id",authUser,deleteInvoice)
router.get("/highestinvoice",authUser,highestInvoice)
router.get("/getchartdata",authUser, getChartData)

export default router