# Multi-stage build for Node.js application
FROM node:20-alpine AS build

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install ALL dependencies (including dev dependencies like Vite)
RUN npm ci

# Copy source code
COPY . .

# Build the application (requires Vite for frontend build)
RUN npm run build

# Production stage - Node.js backend only
FROM node:20-alpine AS production

# Install curl for healthcheck
RUN apk add --no-cache curl

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install only production dependencies for the backend
RUN npm ci --only=production && npm cache clean --force

# Install tsx globally to run TypeScript files
RUN npm install -g tsx

# Copy backend files
COPY --from=build /app/server ./server
COPY --from=build /app/shared ./shared

# Expose port 5000 for the backend
EXPOSE 5000

# Set environment variables
ENV NODE_ENV=production
ENV PORT=5000

# Start the Node.js backend only
CMD ["tsx", "server/index.ts"]
