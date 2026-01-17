
FROM node:22


WORKDIR /app


COPY package*.json ./


RUN npm install


RUN npm install -g nodemon


COPY . .


EXPOSE 5000


ENV NODE_ENV=development


CMD ["nodemon", "--legacy-watch", "server.js"]
