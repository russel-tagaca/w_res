#!/bin/bash

# Azure VM Deployment Script for echo "✅ Deploymeecho "✅ Deployment complete!"
echo ""
echo "🌐 Your Azure VM Public IP: $(curl -s ifconfig.me 2>/dev/null || echo 'Run: curl ifconfig.me')"
echo ""
echo "🔧 REQUIRED: Cloudflare DNS Setup"
echo "1. Login to Cloudflare Dashboard"
echo "2. Go to DNS tab for russeltagaca.com"
echo "3. Add A record: @ (root) → YOUR_AZURE_VM_IP (Proxied ON)"
echo "4. Add A record: www → YOUR_AZURE_VM_IP (Proxied ON)"
echo "5. SSL/TLS → Overview → Set to 'Full'"
echo "6. SSL/TLS → Edge Certificates → Enable 'Always Use HTTPS'"
echo ""
echo "⏳ Wait 5-10 minutes for DNS propagation"
echo "🎯 Then visit: https://russeltagaca.com"
echo ""
echo "🔐 Cloudflare handles SSL automatically!"
echo "🐳 Docker nginx is ready for Cloudflare proxy"ho "🌐 Your application should be available at: http://russeltagaca.com"
echo ""
echo "� Cloudflare DNS Setup:"
echo "1. Add A record: russeltagaca.com → $(curl -s ifconfig.me)"
echo "2. Add A record: www → $(curl -s ifconfig.me)"
echo "3. Enable Cloudflare proxy (orange cloud)"
echo "4. Set SSL/TLS to 'Full' mode"
echo "5. Enable 'Always Use HTTPS'"
echo ""
echo "� Next steps:"
echo "1. Configure DNS in Cloudflare dashboard"
echo "2. Wait 5-10 minutes for DNS propagation"
echo "3. Your site will be available at: https://russeltagaca.com"
echo ""
echo "🔐 Cloudflare will handle SSL certificates automatically!"
echo "🐳 Docker container nginx is optimized for Cloudflare proxy"
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
