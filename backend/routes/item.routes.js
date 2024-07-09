import express from "express";
import { addItem, deleteItem, getItem, getItems, updateItem } from "../controllers/item.controller.js";


const router = express.Router();

router.post("/additem", addItem);
router.get("/getitems", getItems);
router.get("/getitem/:id", getItem);
router.put("/updateitem/:id", updateItem);
router.delete("/deleteitem/:id", deleteItem);

export default router