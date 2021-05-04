var express = require('express');
var router = express.Router();

//Routes

//
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// /* GET users page. */
// router.get('/users', function(req, res) {
//   res.render('index', { title: 'Sababa' });
// });


module.exports = router;
