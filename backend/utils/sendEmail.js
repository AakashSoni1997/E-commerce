 const nodemailer=require("nodemailer")

const sendEmail=async(options)=>{

    const transporter = nodemailer.createTransport({
    host: process.env.SMPT_HOST,
    port: process.env.SMPT_PORT,
    service:process.env.SMPT_SERVICE,
    secure:false,
    auth:{
        user:process.env.SMPT_MAIL,
        pass:process.env.SMPT_PASS,
    }
})

const mailOption ={
    from:process.env.SMPT_MAIL,
    to:options.email,
    subject:options.subject,
    text:options.message,
}

await transporter.sendMail(mailOption)
}


module.exports=sendEmail