const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.listen(8080, () => console.log('la falopa is ok'))


app.post('/:id', (req, res) => {
    const id = req.params.id
    res.json({
        id: req.body.id
    })
})

