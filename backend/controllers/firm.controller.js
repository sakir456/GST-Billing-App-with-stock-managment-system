// controllers/firmController.js


import Firm from '../models/firm.model.js';
import { uploadToCloudinary } from '../utils/cloudinaryUtils.js';
import cloudinary from  '../utils/cloudinaryUtils.js';
import mongoose from 'mongoose';

/**
 * Saves firm details to the database, including uploading a logo image to Cloudinary if provided.
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 */
export const saveFirmDetails = async (req, res) => {
  try {
    const {
      businessName,
      gstin,
      phoneNo,
      email,
      address,
      pincode,
      state,
      description,
      businessType,
      businessCategory,
    } = req.body;

    
    if (!businessName) {
      return res.status(400).json({ error: 'Business Name is required to save Firm' });
    }

    let logo;

    
    if (req.file) {
      try {
        logo = await uploadToCloudinary(req.file.buffer, { folder: 'firm_logos' });
      } catch (error) {
        return res.status(500).json({ error: 'Failed to upload logo image' });
      }
    }

    
    const newFirm = new Firm({
      userId: req.user._id,
      businessName,
      gstin,
      phoneNo,
      email,
      address,
      pincode,
      state,
      description,
      businessType,
      businessCategory,
      logo, 
      
    });

    // Save to database
    await newFirm.save();

    // Respond with success
    res.status(201).json({ message: 'Firm information saved successfully', firm: newFirm });
  } catch (error) {
    console.error('Error while saving FirmDetails:', error);
    res.status(500).json({ error: 'Server error' });
  }
};


export const updateFirmDetails =  async(req,res) => {
      try {
        const { id } = req.params;
    if (!id) {
      return res.status(400).json({ error: "Firm ID is required" });
    }

    // Validate that the firm ID is a valid MongoDB ObjectId
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ error: "Invalid Firm ID" });
    }
        const {
            businessName,  gstin,   phoneNo, email, address,pincode,state, description, businessType,businessCategory} = req.body;

            if(!businessName){
                return res.status({error:"Business Name is required to save Firm"})
            }
            let updateFirmData = { businessName, gstin, phoneNo, email, address, pincode, state, description, businessType, businessCategory };
             if(req.file) {
              const firm = await Firm.findOne({ _id: id, userId: req.user._id });
                if (!firm) {
                    return res.status(404).json({ error: "Firm not found" });
                  }

                  if (firm.logo) {
                    const publicId = firm.logo.split('/').pop().split('.')[0];
                    await cloudinary.uploader.destroy(publicId);
                  }
                  updateFirmData.logo = await uploadToCloudinary(req.file.buffer);
             }
             const updatedFirm = await Firm.findOneAndUpdate(
              { _id: req.params.id, userId: req.user._id },
                updateFirmData,
                { new: true, runValidators: true }
              );
              if (!updatedFirm) {
                return res.status(404).json({ error: "Firm not found" });
              }
              return res.status(200).json({message:"Firm Updated Successfully",firm:updatedFirm});
              

      } catch (error) {
        console.error("Error while updating FirmDetails", error);
            return res.status(500).json({error: "Server error"})
      }
}

// export const getFirmDetails = async(req,res) => {

//   try {
//     const {id} = req.params;
//    if(!id) {
//     return res.status(400).json({error: "id is required get firm Details"})
//    }
//    const firm = await Firm.findById(id);
//    if(!firm){
//     return res.status(404).json({error: "Firm not found"})
//    }
//    return res.status(200).json({message: "Firm Information retrieved successfully",firm})
    
//   } catch (error) {
//      console.error("Error while retrieving firm details",error)
//      return res.status(500).json({error: "Server error"}) 
//   }
  
// }


