#!/bin/bash

echo "🚀 Déploiement BarbellNearMe avec Docker + Traefik"
echo "=================================================="

# Variables
PROJECT_DIR="/root/clawd/barbell-near-me"
CONTAINER_NAME="barbellnearme"
DOMAIN="barbellnearme.com"
EMAIL="admin@barbellnearme.com"

# Arrêter l'ancien conteneur
echo "🛑 Arrêt de l'ancien conteneur..."
docker rm -f $CONTAINER_NAME 2>/dev/null

# Build et lancement
echo "🔨 Build et lancement..."
cd $PROJECT_DIR

#构建
echo "📦 Installation des dépendances..."
docker run --rm -v $PROJECT_DIR:/app -w /app node:20-alpine sh -c "npm install"

echo "🏗️ Build Next.js..."
docker run --rm -v $PROJECT_DIR:/app -w /app node:20-alpine sh -c "npm run build"

# Lancement du conteneur
echo "🚀 Lancement du conteneur..."
docker run -d \
  --name $CONTAINER_NAME \
  --network coolify \
  -p 3001:3000 \
  -e NODE_ENV=production \
  -v $PROJECT_DIR:/app \
  -w /app \
  --label "traefik.enable=true" \
  --label "traefik.http.routers.barbellnearme.rule=Host(\`$DOMAIN\`)" \
  --label "traefik.http.routers.barbellnearme.tls.certresolver=le" \
  --label "traefik.http.services.barbellnearme.loadbalancer.server.port=3000" \
  node:20-alpine \
  sh -c "npm start"

# Attendre que le conteneur soit prêt
echo "⏳ Attente du démarrage..."
sleep 10

# Vérification
echo ""
echo "✅ Vérification..."
if docker ps | grep -q $CONTAINER_NAME; then
    echo "✅ Conteneur démarré!"
    echo ""
    echo "🌐 Ton site: https://$DOMAIN"
    echo ""
    echo "📊 Commandes utiles:"
    echo "   docker logs $CONTAINER_NAME  # voir les logs"
    echo "   docker stop $CONTAINER_NAME  # arrêter"
    echo "   docker restart $CONTAINER_NAME  # redémarrer"
else
    echo "❌ Erreur! Vérifie les logs:"
    echo "   docker logs $CONTAINER_NAME"
fi
