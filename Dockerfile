# Base image (Node environment already installed)
FROM node:18

# Create app directory
WORKDIR /app

# Copy package files first (for caching)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy all code
COPY . .

# Expose port
EXPOSE 3000

# Start app
CMD ["node", "app.js"]
