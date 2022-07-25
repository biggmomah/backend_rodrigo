const accountSid = process.env.ACCOUNTSID ; 
const authToken = process.env.AUTHTOKEN; 
const client = require('twilio')(accountSid, authToken); 


const sendWhatsapp = (info) => {
    client.messages 
          .create({ 
            from: 'whatsapp:'+ process.env.CELUTWILIOWP,       
            body: `${info}`, 
             to: 'whatsapp:'+ process.env.MICELUTWILIOWP 
           }) 
          .then(message => console.log(message.sid)) 
          .done();

}

module.exports =  sendWhatsapp
