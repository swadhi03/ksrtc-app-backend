const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const {busmodel} = require("./models/bus")


const app = express()
app.use(cors())
app.use(express.json())

mongoose.connect("mongodb+srv://swathi:swathi2609@cluster0.em0miqo.mongodb.net/busdb?retryWrites=true&w=majority&appName=Cluster0")

app.post("/signup",(req,res)=>{
    let input=req.body
    let bus = new busmodel(input)
    bus.save()
    console.log(bus)
    res.json({"status":"success"})
})



app.listen(8080, () => {
    console.log("serverStarted")
})

