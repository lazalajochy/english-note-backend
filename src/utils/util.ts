import multer from 'multer';
import { Storage } from '@google-cloud/storage';

const storage = new Storage();
const bucket = storage.bucket('salud-911');


const multerStorage = multer.memoryStorage();
export const upload = multer({ storage: multerStorage });

export const uploadFileToBucket = async (file: Express.Multer.File): Promise<string> => {
  return new Promise((resolve, reject) => {
    const blob = bucket.file(Date.now() + '-' + file.originalname);
    const blobStream = blob.createWriteStream({
      resumable: false,
      contentType: file.mimetype,
      public: true, 
    });

    blobStream.on('error', (err) => {
      console.error('Error subiendo archivo:', err);
      reject(err);
    });

    blobStream.on('finish', () => {
      const publicUrl = `https://storage.googleapis.com/${bucket.name}/${blob.name}`;
      resolve(publicUrl);
    });

    blobStream.end(file.buffer);
  });
};