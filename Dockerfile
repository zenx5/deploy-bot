# Usa una imagen base oficial de Node.js
FROM node:14

# Establece el directorio de trabajo en la imagen
WORKDIR /app

# Copia el archivo package.json y package-lock.json al directorio de trabajo
COPY package*.json ./

# Instala las dependencias
RUN npm install

# Copia el resto del código de la aplicación al directorio de trabajo
COPY . .


# Comando para ejecutar la aplicación
CMD ["npm", "start"]
