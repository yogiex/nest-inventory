FROM node:20.12.0-alpine as delopment
WORKDIR /src
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm","run","start:prod"]