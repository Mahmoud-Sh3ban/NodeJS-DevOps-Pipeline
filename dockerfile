# Use the official Node.js Alpine image as the base
FROM node:current-alpine

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install --omit=dev && npm install express

# Copy the application code to the container
COPY . .

# Expose the port on which the application will run
EXPOSE 3000

# Start the application
CMD [ "node", "app.js" ]