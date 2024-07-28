import mongoose from 'mongoose';

const invoiveSchema = new mongoose.Schema({
    partyName:{
        type: String,
         required: true
    },
    billingName:{
        type: String, 
    },
    email:{
        type:String
    },
    poNo:{
       type:Number,
      
    },
    poDate:{
      type:Date,
      default: Date.now(),
    },
    ewayBillNo:{
        type:Number
    },
    invoiceNo:{
        type:Number,
       
    },
    invoiceDate:{
        type: Date, 
        default: Date.now(),
        
    },
    saleItems:[
        {
            itemName:{type:String },
            qty:{type:Number },
            price:{type:Number },
            discountPercent:{type:Number},
            discountAmount:{type:Number},
            TaxInPercent:{type:String},
            TaxInAmount:{type:Number},
            Amount:{type:Number },
        }
    ],
    pandfAmount:{
        type:Number 
    },
    grandTotal:{
        type:Number,
        
    }

},{timestamps:true})

const Invoice = mongoose.model('Invoice',invoiveSchema)

export default Invoice