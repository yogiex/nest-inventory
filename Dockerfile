FROM node:12.19.9-alpine3.9 as delopment
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install glob rimraf
COPY . .
RUN npm run start