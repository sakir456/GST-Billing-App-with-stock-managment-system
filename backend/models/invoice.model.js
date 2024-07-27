import mongoose from 'mongoose';

const invoiveSchema = new mongoose.Schema({
    partyName:{
        type: String,
         required: true
    },
    billingName:{
        type: String, 
    },
    Email:{
        type:String
    },
    poNo:{
       type:Number 
    },
    poDate:{
      type:Date,
      
    },
    ewayBillNo:{
        type:Number
    },
    invoiceNo:{
        type:Number,
        required:true
    },
    invoiceDate:{
        type: Date, 
        default: Date.now,
        required:true
    },
    items:[
        {
            itemName:{type:String, required:true},
            qty:{type:Number, required:true},
            price:{type:Number, required:true},
            discountPercent:{type:Number},
            discountAmount:{type:Number},
            TaxInPercent:{type:Number},
            TaxInAmount:{type:Number},
            Amount:{type:Number, required:true},
        }
    ],
    pandfAmount:{
        type:Number 
    },
    GrandTotal:{
        type:Number,
        required:true 
    }

},{timestamps:true})

const Invoice = mongoose.model('Invoice',invoiveSchema)

export default Invoice