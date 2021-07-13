const express = require('express');
const cookieParser = require('cookie-parser');

const app = express();
app.use(cookieParser());

app.get('/', (req, res) =>{
    res.cookie("cookie1","This is my first cookie");
    //res.status(200).send({msg:"This is my homepage."});
    res.end("wow");
});

app.get('/removeCookie', (req, res) =>{
    res.clearCookie("cookie1");
    //res.status(200).send({msg:"This is my homepage."});
    res.end("wow");
});
app.listen(3000, ()=>{
    console.log("Server is running...");
});