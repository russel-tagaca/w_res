#!/bin/bash

# Deployment script for Azure VM
set -e

echo "🚀 Starting deployment..."

# Pull latest changes (if using git)
# git pull origin main

# Stop existing containers
echo "📦 Stopping existing containers..."
docker-compose down || true

# Remove old images to free space
echo "🧹 Cleaning up old images..."
docker image prune -f

# Build and start new containers
echo "🔨 Building and starting containers..."
docker-compose up --build -d

# Show status
echo "📊 Container status:"
docker-compose ps

# Show logs
echo "📝 Recent logs:"
docker-compose logs --tail=50

echo "✅ Deployment complete!"
echo "🌐 Application should be running on http://your-vm-ip:5000"
