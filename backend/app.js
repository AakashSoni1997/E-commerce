const express= require("express")
const errorMiddleWare=require("./middleware/error")
const cookieParser = require("cookie-parser")
const cors =require("cors")

const app=express()
app.use(cors())
app.use(express.json())
app.use(cookieParser())


//Route Import
const product=require("./routes/productRoute")
const user=require("./routes/userRoute")
const order=require("./routes/orderRoute")

app.use("/api/v1",product)
app.use("/api/v1",user)
app.use("/api/v1",order)




//MiddleWare For Error 
app.use(errorMiddleWare)



module.exports= app 