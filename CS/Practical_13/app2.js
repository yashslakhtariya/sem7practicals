const express = require('express'); 						
const passport = require('passport');						
const APIStrategy = require('ibmcloud-appid').APIStrategy;		
const app = express();
app.use(passport.initialize());
passport.use(new APIStrategy({
	oauthServerUrl: "https://au-syd.appid.cloud.ibm.com/oauth/v4/87b71da3-5ccd-4dc0-b003-7cdc47f4a3bd",
}));

// Protect the whole app
app.use(passport.authenticate(APIStrategy.STRATEGY_NAME, {
	session: false
}));

// The /api/data API used to retrieve protected data
app.get('/api/data', (req, res) => {
	res.json({
		data: 'Kem cho? Maja maja ne?'
	});
});
app.listen(3001, () => {
    console.log('Listening on http://localhost:3001');
});
