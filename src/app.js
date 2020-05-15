const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);


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
