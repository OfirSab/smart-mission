const LocalStrategy = require('passport-local').Strategy
const User = require('../models/Post')
// const bcrypt = require('bcrypt')

module.exports = function(passport){
    passport.use(
        new LocalStrategy(({usernameField: 'username',passswordField: 'password'}),(username,password,done)=>{
            User.findOne({First_Name: username},(err,user) =>{
                if(err) throw err
                if(!user){
                    return done(null,false,{message: 'User not found'})
                } 
                else{
                    if(user.Last_Name == password) done(null,user)
                    else {done(null,false,{message:'Password incorrect. Check again'})}
                }
            })
        })
    )
    passport.serializeUser((user,done) => {
        done(null,user.id)
      })
      passport.deserializeUser((id,done) => {
        User.findOne({_id: id},(err,user) => {
            done(err,user)
        })
      })
}
