const {createTransport} = require('nodemailer')

const   sendMail = async (html) =>  {
    // const TEST_MAIL = 'botDenodemailer.95@gmail.com'
    
    const transporter = createTransport({
        service: 'gmail',
        port: 587,
        auth: {
            user: process.env.MAILBOT ,
            pass: process.env.NODEMAILERPASS
        }
    });
    
    const mailOptions = {
        from : process.env.MAILBOT,
        to: process.env.MAILTO,
        subject: 'Comprobante de Compra',
        html: html
    }
    
      await transporter.sendMail(mailOptions)
   
   
}

module.exports = sendMail