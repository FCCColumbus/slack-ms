const axios = require('axios');

exports.sendInvite = async (req, res, next) => {
    const slackBase = 'https://slack.com/api/users.admin.invite';
	const user = {
		email: req.body.email,
		firstName: req.body.first_name
	};

	const result = await axios.get(slackBase, {
		params: {
			token: process.env.CLIENT_TOKEN,
			email: user.email,
			first_name: user.firstName
		}
	});
    
    if(!result.ok) {
        const error = result.data.error;
        // res.status(500).json(error);
        next(error);
        
    } else {
        res.status(200).json(response.data);
    }


}