const multer = require("multer");
const path = require("path");

const storageTypes = {
    local: multer.diskStorage({
      destination: (req, file, cb) => {
        cb(null, path.resolve(__dirname, "..", "..", "tmp", "uploads"));
      },
      filename: (req, file, cb) => {
        cb(null, new Date().toISOString() + file.originalname);
      }
    }),
};
  
module.exports = {
    dest: path.resolve(__dirname, "..", "..", "tmp", "uploads"),
    storage: storageTypes.local,
    limits: {
        fileSize: 2 * 1024 * 1024
    },
    fileFilter: (req, file, cb) => {
        const allowedMimes = [
                                "image/jpeg",
                                "image/pjpeg",
                                "image/png",
                                "image/gif"
                                ];

        if (allowedMimes.includes(file.mimetype)) {
            cb(null, true);
        }
        
        cb(new Error("Invalid file type."));
    }
};