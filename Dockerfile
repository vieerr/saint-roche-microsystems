# Etapa 1: Construcción
FROM node:20-alpine AS builder
WORKDIR /app

COPY package*.json ./
RUN npm install --force

COPY . .
RUN npx ng build --configuration production

# Etapa 2: Servidor Nginx
FROM nginx:alpine
COPY --from=builder /app/dist/saint-roche-microsystems/browser /usr/share/nginx/html

# Configuración personalizada de NGINX (si usas rutas Angular)
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
# CMD ["nginx", "-g", "daemon off;"]
