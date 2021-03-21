FROM node:12.21.0-alpine3.10

ADD . /app
WORKDIR /app
RUN npm install

CMD ["npm", "run", "dev"]