const twilio = require('twilio')

const sendSMS = async (info) =>  {
    
    const accountSid = process.env.ACCOUNTSID
    const authToken = process.env.AUTHTOKEN
    
    const client = twilio(accountSid, authToken)
    
    try {
       const message = await client.messages.create({
          body: ` Nuevo Pedido de :  
          Detalle de compra : ${info}`,
          from: process.env.CELUTWILIO,
          to: process.env.MICELU
         })
         console.log(message)
    } catch (error) {
       console.log("Todo ok de momento")
    }
}

module.exports =  sendSMS
