FROM node:18-alpine

WORKDIR /service

COPY . .

RUN npm install

EXPOSE 3001

CMD [ "npm", "start"]