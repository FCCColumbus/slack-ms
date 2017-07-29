var express = require('express');
var axios = require('axios');
var router = express.Router();
require('dotenv').config();

/* GET users listing. */
router.post('/', function(req, res) {
	var slackBase = 'https://slack.com/api/users.admin.invite';
	var user = {
		email: req.body.email,
		firstName: req.body.first_name
	};

	axios.get(slackBase, {
		params: {
			token: process.env.CLIENT_TOKEN,
			email: user.email,
			first_name: user.firstName
		}
	}).then(function(response) {
		console.log("The server sent a response");
		 res.status(200).json(response.data);
	}).catch(function(err) {
		 res.status(500).json(err.data);
	});


});

module.exports = router;
