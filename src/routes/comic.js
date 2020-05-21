const express = require("express");
const router = express.Router();

const ComicController = require('../controllers/ComicController');

const MulterMiddleware = require('../middleware/multer');


router
    .get("/comic", ComicController.index)
    .post("/comic", MulterMiddleware.single('file'), ComicController.create)
    .delete("/comic/:id", ComicController.delete);

module.exports = router;