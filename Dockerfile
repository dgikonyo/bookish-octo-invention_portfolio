FROM node:18-alpine

WORKDIR /personal-portfolio/

COPY public/ /personal-portfolio/public
COPY src/ /personal-portfolio/src
COPY package.json /personal-portfolio/

RUN npm install

CMD ["npm", "start"]