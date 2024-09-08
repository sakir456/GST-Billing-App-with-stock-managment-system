// utils/cloudinaryUtils.js

import { v2 as cloudinary } from 'cloudinary';
import dotenv from 'dotenv';

dotenv.config();

// Configure Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

/**
 * Uploads a file buffer to Cloudinary and returns the secure URL.
 * @param {Buffer} fileBuffer - The buffer of the file to upload.
 * @param {Object} options - Additional upload options (optional).
 * @returns {Promise<string>} - The secure URL of the uploaded image.
 */
export const uploadToCloudinary = (fileBuffer, options = {}) => {
  return new Promise((resolve, reject) => {
    const uploadStream = cloudinary.uploader.upload_stream(
      { resource_type: 'image', ...options },
      (error, result) => {
        if (error) {
          console.error('Error uploading to Cloudinary:', error);
          return reject(error);
        }
        resolve(result.secure_url);
      }
    );
    uploadStream.end(fileBuffer);
  });
};

export default cloudinary;
