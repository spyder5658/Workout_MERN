const express = require('express')
require("dotenv").config()
const mongoose = require('mongoose')

const workoutRoutes = require('./routes/workouts')
const userRoutes = require('./routes/user')

app=express()
app.use(express.json())

app.use((req,res,next)=>{
    console.log(req.path,req.method)
    next()

})

//Routes
app.use("/api/workouts",workoutRoutes)
app.use("/api/user",userRoutes)

// connect to database
mongoose.connect(process.env.MONGO_URI).then(()=>{
    app.listen(process.env.PORT,()=>{
        console.log("listening on the port",process.env.PORT)
    })

    
}).catch((error)=>{
    console.log(error)
})





