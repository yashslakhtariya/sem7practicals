FROM node:18-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy only the necessary files to the container
COPY app.js .

# Install only production dependencies (none in this case, so it will be quick)
RUN npm install express

#EXPOSE command to expose port
EXPOSE 3000

CMD [ "node", "app.js" ]
