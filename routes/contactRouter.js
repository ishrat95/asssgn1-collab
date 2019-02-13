let express = require('express');
let router = express.Router();


router.get('/',(req, res, next) => {
    res.render('contact/index', { title: 'Contact' });
  });
  

module.exports = router;