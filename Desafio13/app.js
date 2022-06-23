const express = require('express');
const log4js = require('log4js');
const path = require('path');
const app = express();
const os = require('os');
const compression = require('compression');
const objInfo = require('./src/utils/info');
const numCPUs = os.cpus().length
const logger = require('./src/utils/logger')



app.use(compression())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs')
app.set('views', './src/views');


app.use((req, res, next) => {
    logger.info(`You're requesting method:${req.method} ${req.url}`);
    next()
})

app.get('/', (req, res) => {
    res.render('index', { data: objInfo, numCPUs })
})

app.get('*', function (req, res) {
    logger.warn(`The route ${req.url} doesn't exist`)
    res.redirect('/');
});


app.get('/api/randoms', (req, res) => {
    res.send('This route is being redirected from Nginx')
})


module.exports = app