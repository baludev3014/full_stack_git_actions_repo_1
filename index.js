const express = require("express")
const app = express()

app.get('/',(req,res)=>{
    res.send("Home route")
})

app.get('/orders',(req,res)=>{
    res.send("orders")
})

app.listen(4000,()=>{
    console.log("App is listening on port 4000")
})
