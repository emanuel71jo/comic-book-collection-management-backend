const express = require("express");
const router = express.Router();

const ComicController = require('./controllers/ComicController');

router
    .get("/comicbook", ComicController.index)
    .get("/comicbook/options", ComicController.store)
    .post("/comicbook", ComicController.create)
    .delete("/comicbook", ComicController.delete)
    .put("/comicbook", ComicController.update)


module.exports = router;
