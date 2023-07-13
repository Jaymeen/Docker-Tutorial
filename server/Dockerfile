# Specify the base image
FROM node:18.13.0

# Set the working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to enable dependency installation
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the entire application code into the container
COPY . .

# Expose the necessary port
EXPOSE 3000

# Define the startup command
CMD ["npm", "start"]
