const express= require("express")
const errorMiddleWare=require("./middleware/error")
const cookieParser = require("cookie-parser")

const app=express()
app.use(express.json())
app.use(cookieParser())


//Route Import
const product=require("./routes/productRoute")
const user=require("./routes/userRoute")

app.use("/api/v1",product)
app.use("/api/v1",user)



//MiddleWare For Error 
app.use(errorMiddleWare)



module.exports= app 