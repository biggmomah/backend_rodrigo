/* import express from 'express';
import { faker } from '@faker-js/faker';
const app = express();

const randomName = faker.name.findName()
console.log(randomName)

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.set('view engine', 'ejs')

const posts = [
    {title: 'Title 1', body: 'Body 1' },
    {title: 'Title 2', body: 'Body 2' },
    {title: 'Title 3', body: 'Body 3' },
    {title: 'Title 4', body: 'Body 4' },
]

const user = {
    firstName: 'Tim',
    lastName: 'Cook',
}

app.get('/', (req, res) => {
    res.render('index',{
        user
    })
})


app.get('/posts', (req, res) => {
    res.render('posts', {articles: posts})
})

app.listen(3030, console.log('OK'))
 */


function randomInteger(min, max) {
    // return Math.floor(Math.random() * (max - min + 1)) + min;
    return Math.floor(Math.random() * (max - min) + min)
  }

console.log(randomInteger(1,100))


// Creatin random number generator

// const randomNumber= (min, max)=>{
//     re
// }