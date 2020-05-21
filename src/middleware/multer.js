const multer = require("multer");

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './uploads/');
    },
    filename: (req, file, cb) => {
        cb(null, new Date().toISOString()+ '-' + file.originalname);
    }
});

const fileFilter = (req, file, cb) => {
    const isAccepted = ['image/png', 'image/jpg', 'image/jpeg'].find( formatoAceito => formatoAceito == file.mimetype );

    if(isAccepted){
        cb(null, true);
    }

    cb(null, new Error("Invalid format"));
};
  
module.exports = (multer({ storage, fileFilter }));