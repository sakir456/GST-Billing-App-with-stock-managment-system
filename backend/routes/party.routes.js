import express from "express";
import { addParty, deleteParty, getParties, updateParty } from "../controllers/party.controller.js";
import { authUser } from "../middleware/authUser.js";

const router = express.Router();

router.post("/addparty",authUser, addParty);
router.get("/getparties",authUser, getParties);
router.put("/updateparty/:id",authUser, updateParty);
router.delete("/deleteparty/:id",authUser, deleteParty)

export default router