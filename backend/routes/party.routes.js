import express from "express";
import { addParty, deleteParty, getParties, updateParty } from "../controllers/party.controller.js";

const router = express.Router();

router.post("/addparty", addParty);
router.get("/getparties", getParties);
router.put("/updateparty/:id", updateParty);
router.delete("/deleteparty/:id", deleteParty)

export default router