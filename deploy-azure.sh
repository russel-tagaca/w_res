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
echo "3. Consider setting up SSL certificates with Let's Encrypt"
echo ""
echo "🔐 To set up SSL certificates later, run:"
echo "sudo apt install certbot python3-certbot-nginx"
echo "sudo certbot --nginx -d russeltagaca.com -d www.russeltagaca.com"
