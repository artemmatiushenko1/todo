FROM node@sha256:28bed508446db2ee028d08e76fb47b935defa26a84986ca050d2596ea67fd506
 
WORKDIR /app

COPY package*.json .

RUN npm ci --production

COPY . .
 
EXPOSE 3000
 
CMD ["npm", "start"]