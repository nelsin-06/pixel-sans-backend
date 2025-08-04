FROM node:20-bullseye

# Instalar FFmpeg y herramientas necesarias
RUN apt-get update && apt-get install -y \
    ffmpeg \
    python3 \
    python3-pip \
    && rm -rf /var/lib/apt/lists/*

# Instalar youtube-dl como alternativa
RUN pip3 install youtube-dl yt-dlp

# Directorio de trabajo
WORKDIR /app

# Crear directorio temporal
RUN mkdir -p /app/temp

# Copiar archivos de package
COPY package*.json ./

# Instalar dependencias
RUN npm install

# Copiar el resto del código
COPY . .

# Compilar la aplicación
RUN npm run build

# Exponer el puerto
EXPOSE 8080

# Ejecutar la aplicación
CMD ["npm", "run", "start:dev"]