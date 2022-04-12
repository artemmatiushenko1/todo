FROM node:16.14.2-alpine3.14
 
WORKDIR /app

COPY package*.json .

RUN npm ci --production

COPY . .
 
EXPOSE 3000
 
CMD ["npm", "start"]