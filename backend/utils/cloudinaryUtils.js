import cloudinary from '../config/cloudinaryConfig.js';

export const uploadToCloudinary = (fileBuffer) => {
  return new Promise((resolve, reject) => {
    cloudinary.uploader.upload_stream(
      { resource_type: 'image' },
      (error, result) => {
        if (error) return reject(error);
        resolve(result.secure_url); // Return the secure_url from the result
      }
    ).end(fileBuffer);
  });
};
