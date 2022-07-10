import express from 'express';
import passport from '../passport/localAuth.js';
import isAuthenticated from '../utils/auth.js'
const router = express.Router();

router
    .route('/')
    .get((req, res) => {
        res.render('login')
    })

router
    .route('/login-error')
    .get((req, res) => {
        res.render('login-error')
    })

router
    .route('/profile')
    .get(isAuthenticated, (req, res) => {
        res.render('profile')
    })

router
    .route('/signup')
    .get((req, res) => {
        res.render('signup')
    })

    .post(passport.authenticate('signup', {
        successRedirect: '/login',
        failureRedirect: '/signup',
        passReqToCallback: true
    }))
/* .post((req, res) => {
    const {email, password} = req.body

    res.send({email, password})

    usuarios.push(req.body)
    console.log(usuarios)
}) */

router
    .route('/login')
    .get((req, res) => {
        res.render('login')
    })
    .post(passport.authenticate('login', {
        successRedirect: '/profile',
        failureRedirect: '/login-error',
        passReqToCallback: true
    }))


export default router