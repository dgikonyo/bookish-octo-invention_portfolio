FROM node

WORKDIR /bookish-octo-invention_portfolio/

COPY public/ /bookish-octo-invention_portfolio/public
COPY src/ /bookish-octo-invention_portfolio/src
COPY package.json /bookish-octo-invention_portfolio/

RUN npm install

CMD ["npm", "start"]