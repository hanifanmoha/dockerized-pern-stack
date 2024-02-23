FROM node:18-alpine

WORKDIR /app

COPY . .

ARG VITE_BACKEND_URL

ENV VITE_BACKEND_URL $VITE_BACKEND_URL

RUN npm install

EXPOSE 3000

CMD [ "npm", "run", "dev"]