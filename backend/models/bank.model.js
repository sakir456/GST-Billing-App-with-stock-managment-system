import mongoose from 'mongoose';

const bankSchema  = new mongoose.Schema({
   bankName:{
    type: String
   },
   accountNO: {
    type:String
   },
   bankIfsc:{
    type: String
   },
   address:{
    type: String
   },
   userId: { 
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
   }
},{timestamps: true})

const Bank = mongoose.model('Bank', bankSchema);

export default Bank