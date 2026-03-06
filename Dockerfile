FROM alpine:3.22

WORKDIR /app

COPY package*.json .

RUN npm install

COPY . .

EXPOSE 4000

RUN ["npm","run","start"]


