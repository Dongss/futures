var express = require('express');
var account = require('../controllers/account');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('home',{
    jsFile: 'home.js',
    userName: false
  });
});


router.get('/home', function(req, res, next) {

  res.render('home',{
    jsFile: 'home.js',
    userName: '董少帅'
  });

});

router.get('/login', function(req, res, next) {
  account.login(req.body.user_email, req.body.password, function(err, data) {
    if(err) {
      res.json({
        ret_code: -1
      });
    } else {
      res.render('/home',{
        jsFile: 'home.js',
        userName: data.user_name
      });
    }
  });
});

router.get('/logout', function(req, res, next) {
  res.redirect('/');
});

router.post('/sign', function(req, res, next) {
});

module.exports = router;
