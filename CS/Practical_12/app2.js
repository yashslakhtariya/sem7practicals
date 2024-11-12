const jwt = require('jsonwebtoken');
const fs = require('fs');
// const axios = require('axios');
// Load your private key
const privateKey = fs.readFileSync('private_key.pem', 'utf-8'); // Replace with the actual path to your private key file
//const clientId = 'd098e898-494c-4b6d-b0d5-68664732d54a';
//const clientSecret = 'NDJiYjc5OTAtMDVkMi00YzRmLTk2YjktY2EwYzU3Y2ZkZWVj';
// Define JWT claims
const payload = {
    iss: 'https://au-syd.appid.cloud.ibm.com/management/v4/87b71da3-5ccd-4dc0-b003-7cdc47f4a3bd', // Replace <region> and <tenant_id> with your App ID region and tenant ID
    sub: 'Yashlani access token maate', // Replace with the subject for the authentication
    aud: 'https://au-syd.appid.cloud.ibm.com/oauth/v4/87b71da3-5ccd-4dc0-b003-7cdc47f4a3bd', // Audience (App ID region URL)
    exp: Math.floor(Date.now() / 1000) + (60 * 2), // Token expiration time (20 minutes from now)
    iat: Math.floor(Date.now() / 1000) // Issued at time
};

// Generate the signed JWT
const token = jwt.sign(payload, privateKey, { algorithm: 'RS256' });
console.log('Generated JWT:', token);

// Define the authentication URL for App ID
// const authUrl = 'https://au-syd.appid.cloud.ibm.com/oauth/v4/87b71da3-5ccd-4dc0-b003-7cdc47f4a3bd/token'; // Replace <region> and <tenant_id> with your App ID region and tenant ID

/*
// Function to authenticate with App ID
async function authenticateWithAppID() {
    try {
        // Make a request to exchange the JWT for an access token
        const response = await axios.post(authUrl, `grant_type=urn:ietf:params:oauth:grant-type:jwt-bearer&assertion=${encodeURIComponent(token)}`, {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Authorization': 'Basic ' + Buffer.from(`${clientId}:${clientSecret}`).toString('base64')
            }
        });

        // Display the access token
        console.log('Access Token:', response.data);
    } catch (error) {
        // Handle authentication error
        console.error('Authentication error:', error.response ? error.response.data : error.message);
    }
}
// Execute the authentication function
authenticateWithAppID();
*/