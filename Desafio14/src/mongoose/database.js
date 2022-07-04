import 'dotenv/config'
import mongoose from 'mongoose'


mongoose.connect(process.env.URI)
    .then(db => console.log('DB CONNECTED', process.env.URI))
    .catch(err => console.log(err))
