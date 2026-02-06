FROM node:20-alpine

WORKDIR /app

# Copier package.json
COPY package*.json ./

# Installer dépendances
RUN npm ci --only=production

# Copier le code source
COPY . .

# Builder l'app
RUN npm run build

# Exposer le port
EXPOSE 3000

# Commande de lancement
CMD ["npm", "start"]
