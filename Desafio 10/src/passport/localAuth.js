import passport from 'passport';
import {Strategy} from 'passport-local'
const LocalStrategy = Strategy
import User from '../models/users.js'

// STORES THE USER IN THE SESSION 

passport.serializeUser((user, done)=>{
    done(null, user.id)
})

// ONCE WE'VE SERIALIZED THE USER WE CAN NOW RETURN THE ID WITH DESERIALIZE, THE FIRST ARGUMENT CORRESPONDS TO THE KEY OF THE ABOVE USER OBJECT GIVEN TO THE "DONE" FUNCTION

passport.deserializeUser(async (id, done)=>{
    const user = await User.findById(id)
    done(null, user)
})

passport.use('signup', new LocalStrategy(
    {
        usernameField: 'email',
        passwordField: 'password',
        passReqToCallback: true
    },

    async (req, email, password, done) => {
        const user= await User.findOne({email})

        if(user){
            return done(null, false, console.log('Email is registered'))
        }else{
            const newUser = new User()
            newUser.email = email
            newUser.password = newUser.encryptPassword(password)
            // SAVES THE USER
            await newUser.save()
            // FINISHES THE PROCESS AND RETURNS THE USER
            done(null, newUser)
        }

    }

))

passport.use('login', new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true
},

async (req, email, password, done) => {
    const user =await User.findOne({email: email})

    if(!user){ 
        return done(null, false, console.log('No user was found'))
    }if(!user.comparePassword(password)){
        return done(null, false, console.log('Incorrect password')) 
    }
    done(null, user)
}
))



export default passport
