import mongoose from 'mongoose';

const itemSchema = new mongoose.Schema({
    itemName:{
     type: String,
     required: true
    },
    hsnCode:{
        type:Number,
    },
    category:{
        type:String
    },
    salePrice:{
        type:Number,
    },
    purchasePrice:{
        type:Number,
    },
    taxRate:{
        type:Number,
    },
    openingQuantity:{
        type:Number,
    }
}, {timestamps: true})

const Item = mongoose.model('Item', itemSchema);

export default Item;