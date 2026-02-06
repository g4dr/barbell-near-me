#!/bin/bash

# 🚀 Déploiement Docker - BarbellNearMe
# ======================================

echo "🚀 Déploiement Docker - BarbellNearMe"
echo "======================================"

PROJECT_DIR="/root/clawd/barbell-near-me"
CONTAINER_NAME="barbellnearme"
PORT=3001

# 1. Builder sur l'host d'abord
echo "🔨 Build sur l'host..."
cd $PROJECT_DIR
npm ci --prefer-offline
npm run build

# 2. Builder l'image Docker (sans build inside)
echo "🔨 Build de l'image Docker..."
docker build -t barbellnearme:latest .

# 3. Arrêter l'ancien conteneur
echo "🛑 Arrêt de l'ancien conteneur..."
docker rm -f $CONTAINER_NAME 2>/dev/null

# 4. Lancer le nouveau conteneur
echo "🚀 Lancement du conteneur..."
docker run -d \
    --name $CONTAINER_NAME \
    --restart unless-stopped \
    -p $PORT:3000 \
    -e NODE_ENV=production \
    -e NEXT_TELEMETRY_DISABLED=1 \
    $CONTAINER_NAME:latest \
    npm start

# 5. Vérifier
sleep 10
echo ""
if docker ps | grep -q $CONTAINER_NAME; then
    echo "✅ Conteneur démarré sur le port $PORT!"
    echo ""
    echo "🌐 Test local: curl http://localhost:$PORT"
    echo ""
    echo "📊 Logs: docker logs $CONTAINER_NAME"
else
    echo "❌ Erreur! Logs:"
    docker logs $CONTAINER_NAME
fi
