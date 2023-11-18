FROM node:20.9

RUN mkdir /app/

WORKDIR /app/

COPY package*.json /app/

RUN npm install

RUN npm install -g nodemon

COPY ./ /app/

EXPOSE 8080

CMD ["npm", "run", "dev"]