FROM node:12.10.0-alpine

WORKDIR /app

COPY package.json .
COPY package-lock.json .

RUN npm i

COPY . .

EXPOSE 3000
