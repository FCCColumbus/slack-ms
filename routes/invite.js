const express = require('express');
const slackController = require('../controller/Slack');
const router = express.Router();
require('dotenv').config();

//original callback for Slack's API call
router.post('/', slackController.sendInvite);




module.exports = router;
