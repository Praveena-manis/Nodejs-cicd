const express= require('express');

const server= express();

server.get('/',(req,res)=>{
    res.send("Welcome to My Application")
})

server.get('/users',(req,res)=>{
    res.send([{id:1,name:"xx"},{id:2,name:"yy"},{id:3,name:"zz"}])
})

server.listen(5000,()=>console.log("Server Started"))
