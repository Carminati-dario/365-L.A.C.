# Usa un'immagine leggera di Node.js
FROM node:18-alpine

# Crea la cartella di lavoro dentro al container
WORKDIR /app

# Copia i file package.json e package-lock.json
COPY package*.json ./

# Installa solo le dipendenze necessarie per la produzione
RUN npm install --production

# Copia tutto il resto (incluso index.js)
COPY . .

# Imposta il comando per avviare l'app
CMD ["npm", "start"]
