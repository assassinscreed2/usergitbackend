const express = require('express')
const app = express()
const userRouter = require('./routes/user.route')
const {getUserDetails} = require('./controllers/user.controller.js')

app.use(express.json())

app.get('/user/:userid',getUserDetails)

app.get('/',(req,res)=>{
    res.json({message:"Welcome to backend"})
})

app.listen('8000',() => {
    console.log("server running on port 8000")
})