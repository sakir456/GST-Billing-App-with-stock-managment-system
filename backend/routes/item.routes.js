import express from "express";
import { addItem, deleteItem, getItem, getItems, updateItem } from "../controllers/item.controller.js";
import { authUser } from "../middleware/authUser.js";


const router = express.Router();

router.post("/additem",authUser, addItem);
router.get("/getitems",authUser, getItems);
router.get("/getitem/:id",authUser, getItem);
router.put("/updateitem/:id",authUser, updateItem);
router.delete("/deleteitem/:id",authUser, deleteItem);

export default router