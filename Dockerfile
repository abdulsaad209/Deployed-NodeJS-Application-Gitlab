FROM node:18-alpine3.17

WORKDIR /usr/app

COPY package*.json /usr/app/

RUN npm install

COPY . .

ENV MONGO_URI="mongodb://superuser:SuperPassword@localhost:27017/solar_system?authSource=solar_system" 

EXPOSE 3000

CMD [ "npm", "start" ]
