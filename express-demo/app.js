const express = require('express')

const app = express();

app.get('/',(req,res)=>{
    res.send("helloooo")
})

app.get('/example',(req,res)=>{
    res.send('example route')
})

app.get('/example/:name/:age',(req,res)=>{
    let name =req.params.name;
    let age = req.params.age;
    console.log(req.query);
    res.send('Hello '+name+"("+age+")");
})

app.listen(3000);