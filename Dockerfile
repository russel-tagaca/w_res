# Build stage
FROM node:20-alpine AS build
WORKDIR /app
COPY package*.json ./
COPY . .
RUN yarn install --frozen-lockfile
RUN yarn build

# Production stage
FROM nginx:alpine
COPY --from=build /app/dist/public /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
