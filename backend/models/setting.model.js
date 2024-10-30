import mongoose from "mongoose"
const settingsSchema = new mongoose.Schema({
 termsAndConditions: {
    type:String
  },
  userId: { 
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
   }

}, {timestamps:true})

const Setting  = mongoose.model('Setting', settingsSchema)

export default Setting