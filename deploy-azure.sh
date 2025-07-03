#!/bin/bash

# Azure VM Deployment Script for echo "✅ Deployment complete!"
echo "🌐 Your application should be available at: http://russeltagaca.com"
echo ""
echo "📝 Next steps:"
echo "1. Configure your domain DNS to point to this Azure VM's public IP"
echo "2. Open port 80 (and 443 for HTTPS) in Azure Network Security Group"
echo ""
echo "🔐 To set up SSL certificates in Docker container:"
echo "1. Mount SSL certificates from host to container"
echo "2. Update nginx.conf to enable SSL configuration"
echo "3. Run: sudo certbot certonly --standalone -d russeltagaca.com -d www.russeltagaca.com"
echo ""
echo "🐳 Docker container nginx is now handling all web traffic on port 80"
# Run this script on your Azure VM to deploy the application

echo "🚀 Deploying Resume App to Azure VM..."

# Update system packages
echo "📦 Updating system packages..."
sudo apt update && sudo apt upgrade -y

# Install Docker and Docker Compose if not already installed
if ! command -v docker &> /dev/null; then
    echo "🐳 Installing Docker..."
    curl -fsSL https://get.docker.com -o get-docker.sh
    sudo sh get-docker.sh
    sudo usermod -aG docker $USER
fi

if ! command -v docker-compose &> /dev/null; then
    echo "🐳 Installing Docker Compose..."
    sudo curl -L "https://github.com/docker/compose/releases/download/v2.20.0/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
    sudo chmod +x /usr/local/bin/docker-compose
fi

# Stop any existing containers
echo "🛑 Stopping existing containers..."
docker-compose down || true

# Stop and disable host nginx completely (we want Docker nginx to handle everything)
echo "🛑 Stopping and disabling host nginx..."
sudo systemctl stop nginx || true
sudo systemctl disable nginx || true

# Kill any processes using port 80
echo "🔍 Checking for processes using port 80..."
sudo lsof -ti:80 | xargs sudo kill -9 || true

# Build and start the application
echo "🏗️ Building and starting the application..."
docker-compose up --build -d

# Show container status
echo "📊 Container status:"
docker-compose ps

echo "✅ Deployment complete!"
echo "🌐 Your application should be available at: http://russeltagaca.com"
echo ""
echo "📝 Next steps:"
echo "1. Configure your domain DNS to point to this Azure VM's public IP"
echo "2. Open port 80 (and 443 for HTTPS) in Azure Network Security Group"
echo "3. SSL certificates are already configured with certbot"
echo ""
echo "� If you get port 80 conflicts, you have two options:"
echo "Option A: Use Docker nginx (recommended)"
echo "  - Stop host nginx: sudo systemctl stop nginx && sudo systemctl disable nginx"
echo "  - Deploy with: ./deploy-azure.sh"
echo ""
echo "Option B: Use host nginx + Docker on different port"
echo "  - Change docker-compose.yml ports to '8080:80'"
echo "  - Configure host nginx to proxy to localhost:8080"
