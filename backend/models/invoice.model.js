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
       type:String,
      
    },
    poDate:{
      type:Date,
      default: new Date(),
    },
    ewayBillNo:{
        type:String
    },
    invoiceNo:{
        type:Number,
       
    },
    invoiceDate:{
        type: Date, 
        default: new Date(),
        
    },
    saleItems:[
        {
            itemName:{type:String },
            qty:{type:Number },
            price:{type:Number },
            discountPercent:{type:String},
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