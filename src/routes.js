const express = require("express");
const router = express.Router();

const ComicBookController = require('./controllers/ComicBookController');

router.get("/comicbook", ComicBookController.index);


module.exports = router;