const express = require("express");
const router = express.Router();

const ComicController = require('./controllers/ComicController');

router.get("/comicbook", ComicController.index);


module.exports = router;
