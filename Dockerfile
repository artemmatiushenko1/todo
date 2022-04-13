# stage 1

FROM node:16.14.2-alpine3.14 AS build
 
WORKDIR /app

COPY package*.json .

RUN npm ci --production

COPY . .
 
RUN npm run build

# stage 2

FROM nginx:1.21.6-alpine

WORKDIR /usr/share/nginx/html

EXPOSE 3000

COPY --from=build /app/build .
