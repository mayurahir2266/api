var express = require('express');
var router = express.Router();

var user = require('../controller/populatecontroller')

router.post('/insert',user.Catagory)

router.get('/data',user.Catagori)

router.get('/sdata',user.scatagori)

router.post('/subinsert',user.sub_catagory)

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

module.exports = router;
