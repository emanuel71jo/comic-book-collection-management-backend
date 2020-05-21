const express = require("express");
const router = express.Router();

const routerComic = require('./routes/comic');
const routerUser = require('./routes/user');
const routerCollection = require('./routes/collection');
const routerPerson = require('./routes/person');
const routerLoan = require('./routes/loan');
const routerInvoice = require('./routes/invoice');
const routerReading = require('./routes/reading');
const routerAutentication = require('./routes/autentication');

router.use(routerComic);
router.use(routerUser);
router.use(routerCollection);
router.use(routerPerson);
router.use(routerLoan);
router.use(routerInvoice);
router.use(routerReading);
router.use(routerAutentication);

module.exports = router;
