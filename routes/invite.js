const express = require('express');
const slackController = require('../controller/Slack');
const router = express.Router();
require('dotenv').config();

/* GET users listing. */
router.post('/', slackController.sendInvite);

//original callback for Slack's API call

module.exports = router;
