# Use Node.js 18
FROM node:18-alpine

# Install git and openssh (required for git+ssh URLs)
RUN apk add --no-cache git openssh

# Setting the working directory
WORKDIR /app

# Copy required files to the working directory
COPY package*.json ./

# Install dependencies using npm
RUN npm install 

# Copy the rest of the application code to the working directory
COPY . .

# Set environment variable
ENV NODE_ENV=production

# Build the application
RUN npm run build

# Serve the static files using a simple HTTP server
RUN npm install -g serve

# Expose port 8080
EXPOSE 8080

# Start the server
CMD ["serve", "-s", "dist", "-l", "8080"]
