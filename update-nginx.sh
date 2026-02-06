#!/bin/bash

# 🔄 Mise à jour Nginx pour pointer vers Docker
# ==============================================

PORT=3001
DOMAIN="barbellnearme.com"

echo "🔄 Mise à jour nginx pour barbellnearme.com..."

# Backup de la config actuelle
sudo cp /etc/nginx/sites-enabled/barbellnearme.com /etc/nginx/sites-enabled/barbellnearme.com.backup

# Mettre à jour le proxy_pass
sudo sed -i "s|proxy_pass http://localhost:3003;|proxy_pass http://localhost:$PORT;|g" /etc/nginx/sites-enabled/barbellnearme.com

# Tester la config
sudo nginx -t

# Recharger nginx
sudo systemctl reload nginx

echo "✅ Nginx mis à jour!"
echo "🌐 Site: https://$DOMAIN"
echo "📍 Pointe maintenant vers le port $PORT (Docker)"
