import mongoose from 'mongoose';

const partySchema = new mongoose.Schema({
   userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
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
     type:String
    }
},{timestamps:true})

const Party = mongoose.model('Party', partySchema);

export default Party