import mongoose from 'mongoose';


const firmSchema = new mongoose.Schema({
    logo: {
        type: String,
    },
    businessName:{
        type: String,
        
    },
    gstin: {
        type: String,
        
      },
    phoneNo: {
    type: String,
    },
  email: {
    type: String,
    
  },
  address: {
    type: String,
    
  },
  pincode: {
    type: String,
    
  },
  state: {
    type: String,
    
  },
  description: {
    type: String,
  },
  businessType: {
    type: String,
    
  },
  businessCategory: {
    type: String,
    
  },
  userId: { 
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
   }

},{timestamps: true})

const Firm = mongoose.model('Firm', firmSchema)

export default Firm