# Utiliza una imagen base con Node.js y etiqueta la versión
FROM node:14

# Establece el directorio de trabajo en la imagen
WORKDIR /app

# Copia los archivos del proyecto al directorio de trabajo
COPY package*.json ./

# Instala las dependencias del proyecto
RUN npm install

# Copia el resto de los archivos al directorio de trabajo
COPY . .

# Expone el puerto en el que la aplicación se ejecutará
EXPOSE 3000

# Comando para ejecutar la aplicación
CMD ["npm", "start"]
