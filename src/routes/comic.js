const express = require("express");
const router = express.Router();

const ComicController = require('../controllers/ComicController');

const MulterMiddleware = require('../middleware/multer');

const AdminMiddleware = require('../middleware/admin');


router
    .get("/comic", ComicController.index)
    .post("/comic", AdminMiddleware, MulterMiddleware.single('file'), ComicController.create)
    .delete("/comic/:id", AdminMiddleware, ComicController.delete);

module.exports = router;