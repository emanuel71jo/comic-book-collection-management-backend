const express = require('express');
const router = express();

const ReadingController = require('../controllers/ReadingController');

const UserMiddleware = require('../middleware/user');

router
    .get("/reading", ReadingController.index)
    .post("/reading", UserMiddleware, ReadingController.create)
    .delete("/reading", UserMiddleware, ReadingController.delete)
    .put("/reading", UserMiddleware, ReadingController.update);

module.exports = router;