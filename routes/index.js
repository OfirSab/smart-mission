const express = require('express');
const router = express.Router();
const User = require('../models/Post')
const passport = require('passport')
const { ensureAuthenticated } = require('./auth')
//Routes
// router.get('/', (req, res, next)=> {
//   console.log("HOME");
//   res.render('index', { title: 'Express' });
// });
router.get('/', (req, res, next)=> {
  console.log("HOME");
});
router.get('/Login', (req, res, next) => {
  if(req.isAuthenticated()){
    res.json(true)
      }else{
        res.json(false)
      }
});
router.post('/SetChanges', async (req,res)=>{
  try{
    var objForUpdate = {};

    if (req.body.nome) objForUpdate.First_Name = req.body.nome;
    if (req.body.lastName) objForUpdate.Last_Name = req.body.lastName;

      const updatedUser = await User.updateOne(
      {_id: req.body.id},
      {$set:{
        First_Name: req.body.name,
        Last_Name: req.body.lastName,
        }})
        res.status(200)
        res.send({message: 'success'})
  }catch(err){
    res.json({message: err})
  }
})
router.post('/Add', async (req, res, next) =>{
  const post = new User({
    Id: req.params.id,
    First_Name: req.body.First_Name,
    Last_Name: req.body.Last_Name,
    Age: req.body.Age,
    Date_of_birth: req.body.Date_of_birth,
  });
  try {
    const savedPost = await post.save()
    res.send(savedPost)
    } catch (err) {
        res.json(null)
    }
  });

router.post('/login',(req,res,next)=>{
  passport.authenticate('local',{
    successRedirect: '/users',
    failureRedirect: '/',
    failureFlash: true
  })(req,res,next);
});

  router.get('/Logout', (req,res)=>{
    req.logout();
    res.json(false)
    })
  router.post('/Logout', (req,res)=>{
    req.logout();
    res.json(false)
    })

function checkAuthenticated(req,res,next){
  if(req.authenticated()) {
    return next();
  }
  res.redirect('/login')
}

module.exports = router;
