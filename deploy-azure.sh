#!/bin/bash

# Azure VM Deployment Script for russeltagaca.com
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

# Stop any nginx running on the host (to free up port 80)
echo "🛑 Stopping host nginx if running..."
sudo systemctl stop nginx || true
sudo systemctl disable nginx || true

# Kill any processes using port 80
echo "🔍 Checking for processes using port 80..."
sudo lsof -ti:80 | xargs sudo kill -9 || true

# Build and start the application
echo "🏗️ Building and starting the application..."
docker-compose up --build -d

# Configure host nginx if it exists and certificates are available
if systemctl is-active --quiet nginx && [ -f "/etc/letsencrypt/live/russeltagaca.com/fullchain.pem" ]; then
    echo "🔧 Configuring host nginx to proxy to Docker container..."
    
    # Copy nginx configuration
    sudo cp host-nginx-config.conf /etc/nginx/sites-available/russeltagaca.com
    sudo ln -sf /etc/nginx/sites-available/russeltagaca.com /etc/nginx/sites-enabled/
    sudo rm -f /etc/nginx/sites-enabled/default
    
    # Test and reload nginx
    if sudo nginx -t; then
        sudo systemctl reload nginx
        echo "✅ Host nginx configured successfully"
    else
        echo "❌ Nginx configuration test failed"
    fi
fi

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
