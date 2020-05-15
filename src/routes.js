const express = require("express");
const router = express.Router();

const ComicController = require('./controllers/ComicController');
const UserController = require('./controllers/UserController');

router
    .get("/comicbook", ComicController.index)
    .get("/comicbook/options", ComicController.store)
    .post("/comicbook", ComicController.create)
    .delete("/comicbook", ComicController.delete)
    .put("/comicbook", ComicController.update)

    .get("/user", UserController.index)
    .post("/user", UserController.create)
    .delete("/user", UserController.delete)
    .put("/user", UserController.update)


module.exports = router;
