FROM node:18.16.0-alpine3.18

WORKDIR /app

# Copiar solo los archivos necesarios para instalar dependencias
COPY package*.json ./

# Instalar dependencias
RUN npm install

# Copiar el resto del código fuente
COPY . .

expose 8000
# Comando para iniciar la aplicación
CMD ["npm", "run", "dev"]