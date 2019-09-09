var express = require('express');
var router = express.Router();

/* GET home page. */

router.get('/', function(req, res, next) {
  	res.send('respond with a resource');		//return simple text
  	// res.json({"a":1,"b":2});					//return json
});

router.get('/html/:key', function(req, res, next) {
	var val = req.params.key;						//getting get parameters
  	res.render('index',{data: 'get '+val});
});

router.post('/html', function(req, res, next) {
	console.log(req.body.key);						//key is a post parameter
  	res.send(req.body.key);
});











module.exports = router;
