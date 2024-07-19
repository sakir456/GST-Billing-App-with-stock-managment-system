import mongoose from 'mongoose';

const partySchema = new mongoose.Schema({
    partyName: {
      type:String,
      required:true
    },
    GSTIN:{
       type:String, 
    },
    billingAddress:{
       type:String, 
    },
    shippingAddress:{
       type:String, 
    },
    openingBalance:{
        type:Number
    },
    asOfDate:{
     type:Number
    }
},{timestamps:true})

const Party = mongoose.model('Party', partySchema);

export default Party