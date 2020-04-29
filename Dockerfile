# On utilise la version 10.2.1 de node sur un linux alpine
FROM node:10.20.1-alpine3.9

# On créer un dossier pour notre API
RUN mkdir -p /srv/app/api 

# On copie les fichier nécessaire au fonctionnement de notre application. 
COPY package.json /srv/app/api
COPY package-lock.json /srv/app/api
COPY start.js /srv/app/api
COPY server.js /srv/app/api
COPY ./API /srv/app/api/API 

# On défini ce dossier comme répertoire de travail
WORKDIR /srv/app/api 

# On installe les dépendances
RUN npm install

CMD ["npm", "start"]

# sudo docker build -t api-test .
# sudo docker run -d -p 3000:3000 api-test