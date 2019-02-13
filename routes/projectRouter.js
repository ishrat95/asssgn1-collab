let express = require('express');
let router = express.Router();


router.get('/',(req, res, next) => {
    res.render('projects/index', { title: 'Projects' });
  });

  router.get('/ielts',(req, res, next) => {
    res.render('projects/ielts', { title: 'Projects' });
  });

  
router.get('/habits',(req, res, next) => {
  res.render('projects/habits', { title: 'Projects' });
});


router.get('/spaceWar',(req, res, next) => {
  res.render('projects/spaceWar', { title: 'Projects' });
});


  module.exports = router;