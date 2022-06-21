import express from 'express';
import { objInfo } from './src/utils/info.js';
import os from 'os'
const numCPUs = os.cpus().length

const app = express();


app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.set('view engine', 'ejs')
app.set('views', './src/views')

app.get('/', (req, res) => {
    res.render('index', { data: objInfo, numCPUs })
})

app.get('/api/randoms', (req, res) => {
    res.send('This route is being redirected from Nginx')
})

export default app
