import mongoose from "mongoose";

const itemSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    itemName: {
      type: String,
      required: true,
    },
    hsnCode: {
      type: Number,
    },
    category: {
      type: String,
    },
    salePrice: {
      type: Number,
    },
    purchasePrice: {
      type: Number,
    },
    taxRate: {
      type: String,
    },
    openingQuantity: {
      type: Number,
    },
    stockInHand: {
      type: Number,
    },
    salePriceTax: {
      type: String,
    },
    purchasePriceTax: {
      type: String,
    },
    quantityUnit: {
      type: String,
    },
  },
  { timestamps: true }
);

const Item = mongoose.model("Item", itemSchema);

export default Item;
