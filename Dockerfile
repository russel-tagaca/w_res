# Build stage
FROM node:20-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Production stage
FROM nginx:alpine AS production
# Copy index.js from dist
COPY --from=build /app/dist/index.js /usr/share/nginx/html/index.js
# Copy everything from dist/public (including index.html and assets)
COPY --from=build /app/dist/public/ /usr/share/nginx/html/
EXPOSE 80
CMD ["nginx", "-g", "daemon on;"]
