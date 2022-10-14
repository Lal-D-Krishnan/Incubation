const express = require('express')
const app = express()

app.get('/home',(req,res)=>{
    res.json({"users":["userOne","userTwo","userThree"]})
})

app.listen(5000,()=>{
    console.log("Server Started on port 5000");
})