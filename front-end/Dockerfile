# Use Node 22 (compatible with Angular CLI)
FROM node:22

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json first (for caching)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the app
COPY . .

# Expose port 4200 for Angular dev server
EXPOSE 4200

# Run Angular dev server
CMD ["npm", "start", "--", "--host", "0.0.0.0"]
