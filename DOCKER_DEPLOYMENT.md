# 🚀 BarbellNearMe - Guide Déploiement Docker

## Option 1: Docker + Nginx (Recommandé Maintenant)

### Étape 1: Builder et lancer Docker
```bash
cd /root/clawd/barbell-near-me
./docker-deploy.sh
```

### Étape 2: Mettre à jour Nginx
```bash
./update-nginx.sh
```

### Étape 3: Tester
```bash
curl https://barbellnearme.com
```

---

## Option 2: Coolify (Quand ça fonctionne)

### Accéder à Coolify
```
http://207.244.246.189:8000
```

### Créer un projet
1. Clique "Create Project"
2. Nom: `barbellnearme`
3. Type: **Docker Compose**

### Configuration Coolify
```yaml
version: '3.8'

services:
  barbellnearme:
    image: node:20-alpine
    container_name: barbellnearme
    ports:
      - "3001:3000"
    environment:
      - NODE_ENV=production
    volumes:
      - .:/app
    working_dir: /app
    command: sh -c "npm install && npm run build && npm start"
    labels:
      - "traefik.enable=true"
      - "traefik.http.routers.barbellnearme.rule=Host(`barbellnearme.com`)"
```

---

## 📁 Fichiers Créés

| Fichier | Description |
|---------|-------------|
| `Dockerfile` | Image Docker Next.js |
| `docker-deploy.sh` | Script déploiement Docker |
| `update-nginx.sh` | Script mise à jour nginx |
| `docker-compose.yml` | Config Docker Compose |
| `coolify.json` | Config Coolify |

---

## 🔧 Commandes Utiles

```bash
# Voir les logs
docker logs barbellnearme

# Redémarrer
docker restart barbellnearme

# Arrêter
docker stop barbellnearme

# Voir les ports
docker ps | grep barbell

# Entrer dans le conteneur
docker exec -it barbellnearme sh
```

---

## 🆘 Dépannage

### Le site ne répond pas
```bash
# Vérifier le conteneur
docker ps | grep barbell

# Voir les logs
docker logs barbellnearme

# Vérifier nginx
curl http://localhost:3001
```

### Erreur de build
```bash
# Rebuild manually
cd /root/clawd/barbell-near-me
npm install
npm run build
```

---

## 📊 Architecture

```
barbellnearme.com
        │
        ▼
    Nginx (443)
        │
        ▼
    Docker (3001) ← Next.js
        │
        ▼
    /root/clawd/barbell-near-me
```

---

Mis à jour: 2026-02-06
