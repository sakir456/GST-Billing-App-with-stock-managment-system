import Setting from "../models/setting.model.js"


export const saveTermsAndConditions = async(req, res) => {
  try{
    const {termsAndConditions} = req.body
    const newSetting = new Setting({
        termsAndConditions
    })
    await newSetting.save()
    res.status(201).json(newSetting)

  } catch(error){
    console.error("Error while saving settings",error)
    return res.status(500).json({error:"Server Error"})
  }
}

export const updateTermsAndConditions = async(req,res)=> {
    try{
      const {termsAndConditions} = req.body
      const updatedSetting = await Setting.findByIdAndUpdate(
        req.params.id,
        {
            termsAndConditions   
        },
        {new:true, runValidators: true}
      )
      if(!updatedSetting) {
        return res.status(404).json({error:"terms and condition not found"})
      }
      return res.status(200).json(updatedSetting)
    } catch(error) {
        console.error("Error updating terms and conditions", error)
        return res.status(500).json({ error: "Server error" });
    }
}