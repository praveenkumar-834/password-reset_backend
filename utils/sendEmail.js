import nodemailer from "nodemailer"

const sendEmail = async (email,link)=>{

const transporter = nodemailer.createTransport({

service:"gmail",

auth:{
user:process.env.EMAIL,
pass:process.env.EMAIL_PASS
}

})

await transporter.sendMail({

from:process.env.EMAIL,
to:email,
subject:"Password Reset",
text:`Reset your password using this link: ${link}`

})

}

export default sendEmail