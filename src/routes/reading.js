const express = require('express');
const router = express();

const ReadingController = require('../controllers/ReadingController');

router
    .get("/reading", ReadingController.index)
    .post("/reading", ReadingController.create)
    .delete("/reading", ReadingController.delete)
    .put("/reading", ReadingController.update);

module.exports = router;