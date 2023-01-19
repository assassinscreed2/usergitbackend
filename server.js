const express = require('express')
const app = express()
const cors = require('cors')
const {userRouter} = require('./routes/user.route')

app.use(cors())
app.use(express.json())

app.use('/user',userRouter)

app.get('/',(req,res)=>{
    res.json({message:"Welcome to backend"})
})

app.listen(process.env.PORT || 8000,() => {
    console.log("server running")
})

module.exports = app;