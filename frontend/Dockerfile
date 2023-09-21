<<<<<<< HEAD
FROM node:latest

RUN mkdir app

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .

EXPOSE 3000

=======
FROM node:latest

RUN mkdir app

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .

EXPOSE 3000

>>>>>>> 7559f16 (Test pushing works on my end.)
CMD ["npm", "start"]