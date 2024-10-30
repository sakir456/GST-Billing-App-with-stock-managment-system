import mongoose from 'mongoose';

const invoiceSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
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
        type:String,
       
    },
    invoiceDate:{
        type: Date, 
        default: new Date(),
        
    },
    purchaseItems:[
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
        
    },

    

},{timestamps:true})

const PurchaseInvoice = mongoose.model('PurchaseInvoice',invoiceSchema)

export default PurchaseInvoice