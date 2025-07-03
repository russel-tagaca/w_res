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

# Production stage - nginx + Node.js backend
FROM node:20-alpine AS production

# Install nginx
RUN apk add --no-cache nginx

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install only production dependencies for the backend
RUN npm ci --only=production && npm cache clean --force

# Install tsx globally to run TypeScript files
RUN npm install -g tsx

# Copy built frontend files to nginx document root
COPY --from=build /app/dist/public /usr/share/nginx/html

# Copy PDF files to nginx document root
COPY --from=build /app/attached_assets /usr/share/nginx/html/attached_assets

# Set proper permissions for nginx files
RUN chmod -R 755 /usr/share/nginx/html

# Copy backend files
COPY --from=build /app/server ./server
COPY --from=build /app/shared ./shared

# Copy nginx configuration
COPY nginx.conf /etc/nginx/http.d/default.conf

# Create directories nginx needs
RUN mkdir -p /var/log/nginx /var/lib/nginx/tmp /run/nginx

# Create startup script to run both nginx and Node.js backend
RUN echo '#!/bin/sh' > /start.sh && \
    echo 'nginx -g "daemon off;" &' >> /start.sh && \
    echo 'cd /app && PORT=5000 tsx server/index.ts &' >> /start.sh && \
    echo 'wait' >> /start.sh && \
    chmod +x /start.sh

# Expose ports
EXPOSE 80

# Set environment variables
ENV NODE_ENV=production
ENV PORT=5000

# Start both services
CMD ["/start.sh"]
