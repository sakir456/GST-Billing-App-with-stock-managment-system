import express from "express";
import { createInvoice, deleteInvoice, getInvoices, highestInvoice, updateInvoice } from "../controllers/invoice.controller.js";

const router = express.Router();

router.post("/createinvoice",createInvoice)
router.get("/getinvoices",getInvoices)
router.put("/updateinvoice/:id",updateInvoice )
router.delete("/deleteinvoice/:id",deleteInvoice)
router.get("/highestinvoice",highestInvoice)

export default router