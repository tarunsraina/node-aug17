

const express = require('express');

const path = require('path');

const app = express()



app.use('/public',express.static(path.join(__dirname,'static')))


app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'static/html','index.html'));
})

app.listen(3000);