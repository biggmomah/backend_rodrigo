import express from 'express';
import parseArgs from 'minimist'
const args = process.argv.slice(2)
import { objInfo } from './src/utils/info.js'
const app = express();
import 'dotenv/config'


app.use(express.json());
app.use(express.urlencoded({ extended: true }))

const PORT = process.env.PORT

function randomInteger(min, max) {
    // return Math.floor(Math.random() * (max - min + 1)) + min;
    return Math.floor(Math.random() * (max - min) + min)
}



app.get('/', (req, res) => {
    const num1 = req.query.num1
    const num2 = req.query.num2
    let random = randomInteger(num1, num2)

    if (!num1 && !num2) {
        const min = 1
        const max = 100000000
        const random = randomInteger(min, max)

        res.send({ random })
    }


    res.send({ random })
    // res.send(randomInteger(num1, num2 ))
})

app.get('/info', (req, res) => {
    res.json({ info: objInfo })
})



app.listen(PORT, () => console.log('ok', PORT))



