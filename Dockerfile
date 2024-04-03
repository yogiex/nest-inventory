FROM node:20.12.0-alpine as development
WORKDIR /src
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
RUN npm run dev
RUN npm run test:e2e
EXPOSE 3000
CMD ["npm","run","start:prod"]