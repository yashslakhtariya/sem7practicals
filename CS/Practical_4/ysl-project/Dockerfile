# Use a lightweight Node.js image as the base image
FROM node:18-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy only the necessary files to the container
COPY public/ ./public/

# Install only production dependencies (none in this case, so it will be quick)
RUN npm install express

# Create a minimal package.json for the express server
RUN echo '{ "name": "curse-html", "version": "1.0.0", "main": "app.js", "dependencies": { "express": "^4.18.2" } }' > package.json

# Create the app.js file to serve the static content
RUN echo "const express = require('express'); const path = require('path'); const app = express(); app.use(express.static(path.join(__dirname, 'public'))); const port = 3000; app.listen(port, () => { console.log('Server running on http://localhost:' + port); });" > app.js

# Expose the port the app will run on
EXPOSE 3000

# Define the command to run the application
CMD ["node", "app.js"]
