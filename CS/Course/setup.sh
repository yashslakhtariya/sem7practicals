#!/bin/sh

# Install specific version of express (pinned version)
npm install express@4.21.1

# Create a minimal package.json for the express server
cat <<EOF >package.json
{
  "name": "curse-html",
  "version": "1.0.0",
  "main": "app.js",
  "dependencies": {
    "express": "^4.21.1"
  }
}
EOF

# Create the app.js file to serve the static content
cat <<EOF >app.js
const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'public')));

const port = 3000;
app.listen(port, () => {
  console.log('Server running on http://localhost:' + port);
});
EOF
