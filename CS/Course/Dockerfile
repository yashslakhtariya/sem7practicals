# Use a lightweight Node.js image as the base image
FROM node:18-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy only the necessary files to the container
COPY public/ ./public/

# Copy the setup script and execute it in a single RUN command
COPY setup.sh .
RUN chmod +x setup.sh && ./setup.sh

# Expose the port the app will run on
EXPOSE 3000

# Define the command to run the application
CMD ["node", "app.js"]
