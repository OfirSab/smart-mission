var express = require('express');
var router = express.Router();
const Post = require('../models/Post')
const { ensureAuthenticated } = require('./auth')


//Get users with authentication
router.get('/', ensureAuthenticated, async (req, res, next) => {
  try{
    const posts = await Post.find();
    res.json(posts)
  }catch(err){
      res.json({message: err})
  }
});

//Get users with no authentication
router.get('/all', async (req, res, next) => {
  try{
    const posts = await Post.find();
    res.json(posts)
  }catch(err){
      res.json({message: err})
  }
});
// Get users with no authentication
router.delete('/delete/:username', (req, res) => {
  const { username } = req.params;
  Post.findOneAndDelete({_id: username}, async (err, result) => {
  if (err) return res.send(null)
  const posts = await Post.find();
  res.send(posts)
  });
});
module.exports = router;