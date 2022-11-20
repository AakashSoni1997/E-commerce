const mongoose=require("mongoose")


const EcommerceDb=()=>{


    mongoose.connect("mongodb+srv://as1997:as1997@cluster0.tztaukq.mongodb.net/test")

    .then(()=>{
        console.log("Server is connected to mongoDB atlas")
    })

}

module.exports=EcommerceDb