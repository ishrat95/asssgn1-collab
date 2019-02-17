
/*
  Student Name: Ishratben Vahora
  StudentID: 300986257
  Date: 2019-02-16
*/
let express = require('express');
let router = express.Router();


router.get('/',(req, res, next) => {
    res.render('contact/index', { title: 'Contact' });
  });
  

module.exports = router;