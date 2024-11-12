const express = require('express');
const jwt = require('jsonwebtoken');
const axios = require('axios');

const app = express();
const port = 3000;

// Your App ID public key URL for verifying the JWT signature
const APP_ID_PUBLIC_KEY_URL = 'https://au-syd.appid.cloud.ibm.com/management/v4/87b71da3-5ccd-4dc0-b003-7cdc47f4a3bd/config/idps/custom';

// Middleware to verify the JWT
async function verifyToken(req, res, next) {
    const authHeader = req.headers['authorization'];

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(401).json({ error: 'Authorization header missing or malformed' });
    }

    const token = authHeader.split(' ')[1];

    try {
        // Fetch the App ID public keys
        const response = await axios.get(APP_ID_PUBLIC_KEY_URL, {
            headers: {
                Authorization: `Bearer eyJraWQiOiIyMDI0MTAwMjA4NDIiLCJhbGciOiJSUzI1NiJ9.eyJpYW1faWQiOiJJQk1pZC02OTQwMDA4WThNIiwiaWQiOiJJQk1pZC02OTQwMDA4WThNIiwicmVhbG1pZCI6IklCTWlkIiwianRpIjoiODNhOTIxNjgtZTQwMC00YWU2LTllNGEtMzliNzA4MmJkNDlhIiwiaWRlbnRpZmllciI6IjY5NDAwMDhZOE0iLCJnaXZlbl9uYW1lIjoiWWFzaCIsImZhbWlseV9uYW1lIjoiTGFraHRhcml5YSIsIm5hbWUiOiJZYXNoIExha2h0YXJpeWEiLCJlbWFpbCI6Inlhc2hzbGFraHRhcml5YTIxQGdudS5hYy5pbiIsInN1YiI6Inlhc2hzbGFraHRhcml5YTIxQGdudS5hYy5pbiIsImF1dGhuIjp7InN1YiI6Inlhc2hzbGFraHRhcml5YTIxQGdudS5hYy5pbiIsImlhbV9pZCI6IklCTWlkLTY5NDAwMDhZOE0iLCJuYW1lIjoiWWFzaCBMYWtodGFyaXlhIiwiZ2l2ZW5fbmFtZSI6Illhc2giLCJmYW1pbHlfbmFtZSI6Ikxha2h0YXJpeWEiLCJlbWFpbCI6Inlhc2hzbGFraHRhcml5YTIxQGdudS5hYy5pbiJ9LCJhY2NvdW50Ijp7InZhbGlkIjp0cnVlLCJic3MiOiI5NTUzZjVmNzE4NGRkYjkyMmEwNTZmMjQwY2Y3OGVmNiIsImltc191c2VyX2lkIjoiMTE4MTc2NDQiLCJmcm96ZW4iOnRydWUsImltcyI6IjI3MTYwNjMifSwiaWF0IjoxNzI5NzQ1MDIwLCJleHAiOjE3Mjk3NDg2MjAsImlzcyI6Imh0dHBzOi8vaWFtLmNsb3VkLmlibS5jb20vaWRlbnRpdHkiLCJncmFudF90eXBlIjoidXJuOmlibTpwYXJhbXM6b2F1dGg6Z3JhbnQtdHlwZTphcGlrZXkiLCJzY29wZSI6ImlibSBvcGVuaWQiLCJjbGllbnRfaWQiOiJkZWZhdWx0IiwiYWNyIjoxLCJhbXIiOlsicHdkIl19.j9-u0g6DIgdoxiw4oogSMD-IFDe1zIGcA-jIf_TCpyAAdWxR1RKgb2cUqB7czCqYYSVN8vz1-f_11MbRNDBhfNebDJNBBD4MKXL58tFCA68LDLqcH0EswVYGOoIQa7OyaIBF-UEhnM5dyL3seOVH5fnYn-YiJA7ASo6MjZj64wnC5tgftMMs-7Hf-puP3_ZHmQtXeiIUYROKSltY3JGmdJMj_AMiGkArx73FVQfpQv_0Yz8w3bKuVCd_lbitghz1yH4_Hw3sfeFs9M1uDBtROsCCyn10NaFzDuRULcJCoti8Sp3Y1bjPFOrnov0mDqu0TodD6gp-jGe9M8irVJk13w` // Pass the Bearer token here
            },
        });
        console.log(response)
        const publicKeys = response.data.config.publicKey;
        console.log(publicKeys);
        if (!publicKeys || publicKeys.length === 0) {
            return res.status(500).json({ error: 'Failed to retrieve public keys' });
        }

        // Decode the JWT header to find the key ID (kid)
        const decodedHeader = jwt.decode(token, { complete: true });
        if (!decodedHeader || !decodedHeader.header) {
            return res.status(400).json({ error: 'Invalid token format' });
        }

        // Find the corresponding public key based on the kid
        //const key = publicKeys.find(k => k.kid === decodedHeader.header.kid);

        if (!publicKeys) {
            return res.status(400).json({ error: 'Public key not found for token' });
        }

        // Construct the PEM formatted public key
        // const publicKey = `-----BEGIN PUBLIC KEY-----\n${publicKeys}\n-----END PUBLIC KEY-----`;
        //console.log(publicKey);
        // Verify the token using the public key
        jwt.verify(token, publicKeys, { algorithms: ['RS256'] }, (err, decoded) => {
            if (err) {
                return res.status(401).json({ error: 'Token verification failed', message: err.message });
            }

            // Token is valid, attach user info to request and proceed
            req.user = decoded;
            next();
        });
    } catch (error) {
        res.status(500).json({ error: 'Failed to verify token', message: error.message });
    }
}

// Sample protected route
app.get('/protected', verifyToken, (req, res) => {
    res.json({ message: 'Access granted to protected resource', user: req.user });
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
