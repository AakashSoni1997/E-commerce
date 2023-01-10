const mongoose=require("mongoose")
const dotenv=require("dotenv")

const EcommerceDb=()=>{

    mongoose.connect(process.env.MONGODB_URI)

    .then(()=>{
        console.log("Server is connected to mongoDB atlas")
    })

}

module.exports=EcommerceDb