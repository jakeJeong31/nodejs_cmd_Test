var express = require('express');
var router = express.Router();
var exec = require("child_process").exec;

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log('abc');
  exec('curl http://192.168.50.235:4646/v1/jobs',(err,stdout,stderr) => console.log(stdout))
  //exec('dir',(err,stdout,stderr) => console.log(stdout))
  res.render('index', { title: 'Express' });
});

module.exports = router;
