var express = require('express');
var router = express.Router();
const Post = require('../models/Post')

//Get all users
router.get('/', async (req, res, next) => {
  try{
    const posts = await Post.find();
    res.json(posts)
  }catch(err){
      res.json({message: err})
  }
});

//Add new user by id
router.post('/:id', async (req, res, next) =>{
  const post = new Post({
    Id: req.params.id,
    First_Name: req.body.First_Name,
    Last_Name: req.body.Last_Name,
    Age: req.body.Age,
    Date_of_birth: req.body.Date_of_birth,
  });
  try {
    const savedPost = await post.save()
    res.json(savedPost)
    } catch (err) {
        res.json({ message: "sababa" })
    }
  });
// Get single user by Id
router.get('/:id',async (req,res)=>{
  try{
    const singleUser = await Post.find({Id: req.params.id})
    res.json(singleUser)
  }catch(err){
    res.json({message: err})
}
})
// Update single user by Id
router.put('/:id',async (req,res)=>{
  try{
    const updatedUser = await Post.updateOne(
      {Id: req.params.id},
      {$set:{
        First_Name: req.body.First_Name,
        Last_Name: req.body.Last_Name,
        Age: req.body.Age,
        Date_of_birth: req.body.Date_of_birth,
        }})
        res.json(updatedUser)
  }catch(err){
    res.json({message: err})
}
})
module.exports = router;
