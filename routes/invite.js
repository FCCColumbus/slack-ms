var express = require('express');
var axios = require('axios');
var router = express.Router();
require('dotenv').config();

/* GET users listing. */
router.get('/', function(req, res, next) {
	var slackBase = 'https://slack.com/api/users.admin.invite';

	axios.get(slackBase, {
		params: {
			token: process.env.CLIENT_TOKEN,
			email:'ds321609@ohio.edu',
			first_name: 'dan'
		}
		
	}).then(function(response) {
		console.log(response.data);
		res.json(response.data);
	});

	
});

module.exports = router;
