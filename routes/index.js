let express = require('express');
let router = express.Router();

/* GET home page. */
router.get('/',(req, res, next) => {
  res.render('index', { title: 'Home' });
});

router.get('/about',(req, res, next) => {
  res.render('about', { title: 'About' });
});

router.get('/project',(req, res, next) => {
  res.render('project', { title: 'Project' });
});






router.get('/Services',(req, res, next) => {
  res.render('service', { title: 'Services' });
});


module.exports = router;
