const express = require('express');
const router = express();

const LoanController = require('../controllers/LoanController');

const AdminMiddleware = require('../middleware/admin');


router
    .get("/loan", AdminMiddleware, LoanController.index)
    .post("/loan", AdminMiddleware, LoanController.create)
    .delete("/loan", AdminMiddleware, LoanController.delete)
    .put("/loan", AdminMiddleware, LoanController.update);

module.exports = router;