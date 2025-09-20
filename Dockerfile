# Imagen base
FROM node:20-alpine

# Crear directorio de trabajo
WORKDIR /app

# Copiar archivos del proyecto
COPY package*.json ./
COPY index.js .

# Instalar dependencias
RUN npm install

# Exponer puerto para Cloud Run
EXPOSE 8080

# Iniciar el servidor
CMD ["node", "index.js"]
