# 🚀 Guide Migration BarbellNearMe → Coolify

## Étape 1: Accéder à Coolify

1. Ouvre: **http://207.244.246.189:8000**
2. Login avec tes identifiants

## Étape 2: Créer le Projet

1. Clique **"Create New Project"**
2. Nom: `barbellnearme`
3. Description: "Barbell comparison site"

## Étape 3: Configurer le Serveur

1. Choisis ton serveur local
2. Click **"Add Resource"**

## Étape 4: Connecter GitHub

1. Type: **Git Repository**
2. URL: `https://github.com/g4dr/barbell-near-me`
3. Branch: `main`
4. Click **"Connect"**

## Étape 5: Configuration Build

```
Build Command:    npm install && npm run build
Start Command:    npm start
Port:            3000
Working Dir:      /root/clawd/barbell-near-me
```

## Étape 6: Configuration Domaines

```
Domain:          barbellnearme.com
Wildcard:        www.barbellnearme.com
SSL:             ✅ Enable (Let's Encrypt auto)
```

## Étape 7: Déployer

1. Click **"Deploy"**
2. Attends ~2-3 minutes (build Next.js)
3. Vérifie: http://barbellnearme.com

---

## 🔄 Après Déploiement

### NGINX (Optionnel)
Coolify gère le reverse proxy automatiquement!

Si tu veux garder nginx actuel:
```bash
# Arrêter nginx temporaire
systemctl stop nginx

# Coolify prend le relais
```

### Rollback
- UI Coolify → Versions → Click rollback

### Logs
```bash
# Via Coolify UI
Dashboard → barbellnearme → Logs
```

---

## 📁 Fichiers Créés

```
barbell-near-me/
├── coolify.json        # Config metadata
└── docker-compose.yml  # Pour référence
```

---

## ⚠️ Avant de Migrer

```bash
# Sauvegarder le site actuel
cp -r /root/clawd/barbell-near-me /root/clawd/barbell-near-me.backup

# Tester d'abord en dev
cd /root/clawd/barbell-near-me
npm run dev
```

---

**C'est parti!** Suivre les étapes dans l'UI Coolify.
