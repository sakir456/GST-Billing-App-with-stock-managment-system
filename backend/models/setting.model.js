import mongoose from "mongoose"
const settingsSchema = new mongoose.Schema({
 termsAndConditions: {
    type:String
  }

}, {timestamps:true})

const Setting  = mongoose.model('Setting', settingsSchema)

export default Setting