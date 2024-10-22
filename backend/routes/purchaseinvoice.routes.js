import express from "express";
import { createInvoice, deleteInvoice, getInvoice, getInvoices, highestInvoice, updateInvoice } from "../controllers/purchaseinvoice.controller.js";



const router = express.Router();

router.post("/createinvoice",createInvoice)
router.get("/getinvoices",getInvoices)
router.get("/getinvoice/:id",getInvoice);
router.put("/updateinvoice/:id",updateInvoice)
router.delete("/deleteinvoice/:id",deleteInvoice)
router.get("/highestinvoice",highestInvoice)

export default router