import Party from "../models/party.model.js"

export const addParty = async(req,res) => {
    try {
        const {partyName, GSTIN,billingAddress,shippingAddress, openingBalance,asOfDate} = req.body
        
        if(!partyName) {
            return res.status({error:"Party name is required"})
        }
        const existingParty= await Party.findOne({ partyName, userId: req.user._id });
        if (existingParty) {
            return res.status(400).json({ error: "Party with the same name already exists" });
        }
        const newParty = new Party({
            userId: req.user._id,
            partyName, 
            GSTIN,
            billingAddress,
            shippingAddress, 
            openingBalance,
            asOfDate
        })
        await newParty.save();
        return res.status(201).json(newParty)
    } catch (error) {
        console.error("Error adding Party", error)
        return res.status(500).json({error: "Server error"})
    }
}

export const getParties = async(req,res) => {
    try {
        const parties = await Party.find({ userId: req.user._id });
        return res.status(200).json(parties)
    } catch (error) {
       console.error("Error fething Parties", error) 
       return res.status(500).json({error:"Server error"})
    }
}

export const updateParty = async(req,res) => {
   try {
    const {partyName, GSTIN,billingAddress,shippingAddress, openingBalance,asOfDate} = req.body;
    if(!partyName) {
        return res.status({error:"Party name is required"})
    }
    const existingParty= await Party.findOne({ 
        partyName,
        userId: req.user._id,
        _id: { $ne: req.params.id }
    });
        if (existingParty) {
            return res.status(400).json({ error: "Party with the same name already exists" });
        }

    
    const updatedParty = await Party.findOneAndUpdate(
        { _id: req.params.id, userId: req.user._id },
        {partyName, GSTIN,billingAddress,shippingAddress, openingBalance,asOfDate},
        {new:true, runValidators:true}
    );
    if(!updatedParty){
       return res.status(404).json({error: "Party not found"})
    }
    return res.status(200).json(updatedParty)

   } catch (error) {
     return res.status(500).json({error: "Server error"})
   }
}

export const deleteParty  = async(req,res) => {
    try {
        const deletedParty = await Party.findOneAndDelete({ _id: req.params.id, userId: req.user._id })
        if(!deletedParty){
            return res.status(404).json({error:"Party not found"})
        }
        return res.status(200).json({message: "Party deleted successfully"})
    } catch (error) {
        console.error('Error deleting Party:', error);
        return res.status(500).json({error: "Server error"})
    }
}