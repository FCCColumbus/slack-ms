const express = require('express');
const slackController = require('../controller/Slack');
const router = express.Router();
require('dotenv').config();

const logHeaders = (req, res, next) => {
    console.log(req.headers)
    next();
}

//original callback for Slack's API call
router.post('/', logHeaders, slackController.sendInvite);




module.exports = router;
