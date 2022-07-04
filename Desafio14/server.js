import express from 'express';
import router from './src/routes/routes.js'
import passport from 'passport';
import sessions from 'express-session';
import './src/mongoose/database.js'
const app = express();

app.use(sessions({
    secret: 'secret',
    cookie: {
        maxAge: 60 * 10000
    },
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(express.json())
app.use(express.urlencoded({ extended: true }))


// ROUTES 
app.use('/', router)

// ENGINE

app.set('view engine', 'ejs')
app.set('views', './src/views')



// SERVER CONFIGURATION


const PORT = process.env.PORT
app.listen(PORT, (res, req) => {
    console.log('Server on port', PORT)
})

