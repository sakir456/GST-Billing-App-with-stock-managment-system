import Bank from "../models/bank.model.js";


export const saveBankDetails = async (req,res) => {
    try {
        const {bankName, accountNO,bankIfsc,address} = req.body;
        if (!bankName){
            return res.status(400).json({error:"Bank name is required to save Bank details "})
        }
        const newBank = new Bank({
            bankName, 
            accountNO,
            bankIfsc,
            address   
        });
        await newBank.save()
        res.status(201).json(newBank)
        
    } catch (error) {
        console.error("Error saving Bank details", error)
        return res.status(500).json({ error: "Server Error"}) 
    }
};
export const updateBankDetails = async(req,res) => {
      try {
        const {bankName, accountNO,bankIfsc,address} = req.body;
        const updatedBankDetails = await Bank.findByIdAndUpdate(
            req.params.id,
            {
                bankName, 
                accountNO,
                bankIfsc,
                address  
            },
            { new: true, runValidators: true }
        )
        if(!updatedBankDetails){
            return res.status(404).json({error:"Bank details not found"})
        }
        return res.status(200).json(updatedBankDetails);
        
      } catch (error){
        console.error("Error updating bank details", error)
        return res.status(500).json({ error: "Server error" });
      }
}
