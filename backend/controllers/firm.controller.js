// controllers/firmController.js

import Firm from '../models/firm.model.js';
import { uploadToCloudinary } from '../utils/cloudinaryUtils.js';

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

    // Validate required fields
    if (!businessName) {
      return res.status(400).json({ error: 'Business Name is required to save Firm' });
    }

    let logoUrl;

    // Handle logo file upload if present
    if (req.file) {
      try {
        logoUrl = await uploadToCloudinary(req.file.buffer, { folder: 'firm_logos' });
      } catch (error) {
        return res.status(500).json({ error: 'Failed to upload logo image' });
      }
    }

    // Create new Firm document
    const newFirm = new Firm({
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
      logoUrl, // Will be undefined if no logo was uploaded
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
        const {
            businessName,  gstin,   phoneNo, email, address,pincode,state, description, businessType,businessCategory,} = req.body;

            if(!businessName){
                return res.status({error:"Business Name is required to save Firm"})
            }
            let updateFirmData = { businessName, gstin, phoneNo, email, address, pincode, state, description, businessType, businessCategory };
             if(req.file) {
                const firm = await Firm.findById(req.params.id);
                if (!firm) {
                    return res.status(404).json({ error: "Firm not found" });
                  }

                  if (firm.logoUrl) {
                    const publicId = firm.logoUrl.split('/').pop().split('.')[0];
                    await cloudinary.uploader.destroy(publicId);
                  }
                  updateFirmData.logoUrl = await uploadToCloudinary(req.file.buffer);
             }
             const updatedFirm = await Firm.findByIdAndUpdate(
                req.params.id,
                updateData,
                { new: true, runValidators: true }
              );
              if (!updatedFirm) {
                return res.status(404).json({ error: "Firm not found" });
              }
              return res.status(200).json(updatedFirm);


      } catch (error) {
        console.error("Error while updating FirmDetails", error);
            return res.status(500).json({error: "Server error"})
      }
}

