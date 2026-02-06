FROM node:20-alpine

WORKDIR /app

# Pas de build внутри - on utilise le build existant
# Le build est fait sur l'host

# Copier les fichiers nécessaires pour运行
COPY package*.json ./
COPY .next/ ./.next/
COPY public/ ./public/

# Installer seulement les dépendances de运行
RUN npm ci --only=production --omit=dev

# Variables d'environnement
ENV NODE_ENV=production
ENV PORT=3000

# Exposer le port
EXPOSE 3000

# Commande de lancement
CMD ["npm", "start"]
