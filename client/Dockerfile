# Base image
FROM node:18

# Create app directory
WORKDIR /usr/src/app

# Install pnpm
RUN npm install -g pnpm

# Install dependencies
COPY package*.json ./
RUN pnpm install

# Copy app
COPY . .

# Expose Port
EXPOSE 3000

# Run app
CMD ["pnpm", "dev"]
