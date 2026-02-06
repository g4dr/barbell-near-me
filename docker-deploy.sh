#!/bin/bash

# 🚀 Déploiement Docker - BarbellNearMe
# ======================================

echo "🚀 Déploiement Docker - BarbellNearMe"
echo "======================================"

PROJECT_DIR="/root/clawd/barbell-near-me"
CONTAINER_NAME="barbellnearme"
PORT=3001

# 1. Arrêter l'ancien conteneur
echo "🛑 Arrêt de l'ancien conteneur..."
docker rm -f $CONTAINER_NAME 2>/dev/null

# 2. Builder l'image
echo "🔨 Build de l'image Docker..."
cd $PROJECT_DIR
docker build -t barbellnearme:latest .

# 3. Lancer le conteneur
echo "🚀 Lancement du conteneur..."
docker run -d \
    --name $CONTAINER_NAME \
    --restart unless-stopped \
    -p $PORT:3000 \
    -e NODE_ENV=production \
    -v $PROJECT_DIR:/app \
    -w /app \
    barbellnearme:latest \
    npm start

# 4. Vérifier
sleep 5
echo ""
if docker ps | grep -q $CONTAINER_NAME; then
    echo "✅ Conteneur démarré sur le port $PORT!"
    echo ""
    echo "🌐 Test local: curl http://localhost:$PORT"
    echo ""
    echo "📋 Prochaine étape: Configurer nginx pour pointer vers le port $PORT"
else
    echo "❌ Erreur! Logs:"
    docker logs $CONTAINER_NAME
fi
