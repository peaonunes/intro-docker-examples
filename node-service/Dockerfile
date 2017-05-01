FROM node:6.3.1

RUN mkdir -p /usr/node-service

WORKDIR /usr/node-service

COPY . /usr/node-service

RUN npm install

CMD npm start
