
FROM node:22

WORKDIR /app

COPY package*.json ./
RUN npm install


COPY . .

EXPOSE 4200


ENV CHOKIDAR_USEPOLLING=true


CMD ["npm", "start", "--", "--host", "0.0.0.0", "--poll=1000"]
