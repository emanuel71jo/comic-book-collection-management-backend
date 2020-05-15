const express = require('express');
const app = express();
const router = require('./routes');

app.use(router);

app.use((req, res, next)=>{
    const error = new Error("Could not found");
    error.status = 404;
    next(error);
})

app.use((error, req, res, next)=>{
    res.status(error.status || 500);
    return res.send({
       error: {
           message: error.message
       } 
    });
})

app.listen(3000);
