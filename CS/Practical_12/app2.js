const express = require('express'); 						
const passport = require('passport');						
const APIStrategy = require('ibmcloud-appid').APIStrategy;		
const app = express();
app.use(passport.initialize());
passport.use(new APIStrategy({
	oauthServerUrl: "https://eu-gb.appid.cloud.ibm.com/oauth/v4/09229dcc-ecf6-4631-a54e-4da3629e3210",
}));

// Protect the whole app
app.use(passport.authenticate(APIStrategy.STRATEGY_NAME, {
	session: false
}));

// The /api/data API used to retrieve protected data
app.get('/api/data', (req, res) => {
	res.json({
		data: 12345
	});
});
app.listen(3000, () => {
    console.log('Listening on http://localhost:3000');
});
