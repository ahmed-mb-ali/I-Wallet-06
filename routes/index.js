var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home' });
});

/* GET home page. */
router.get('/home', function(req, res, next) {
  res.render('index', { title: 'Home' });
});

/* GET Documents page. */
router.get('/document', function(req, res, next) {
  res.render('index', { title: 'Document' });
});

/* GET Notification page. */
router.get('/notification', function(req, res, next) {
  res.render('index', { title: 'Notification' });
});

/* GET User Profile page. */
router.get('/userProfile', function(req, res, next) {
  res.render('index', { title: 'User Profile' });
});

/* GET Customer Care page. */
router.get('/customerCare', function(req, res, next) {
  res.render('index', { title: 'Customer Care' });
});



module.exports = router;
