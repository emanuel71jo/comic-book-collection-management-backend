const express = require("express");
const router = express.Router();

router.get('/', (req, res)=>{
    res.send({
        mensage: "OK"
    });
})

module.exports = router;