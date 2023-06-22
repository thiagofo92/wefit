FROM node:18.13.0

WORKDIR /var 

RUN mkdir -p /api/wefit/
RUN mkdir -p /api/wefit/logs
RUN mkdir -p /api/wefit/prisma/

COPY ./dist ./api/wefit/
COPY ./package.json ./api/wefit
COPY ./prisma ./api/wefit/prisma
COPY ./pm2-config.json ./api/wefit
COPY ./script.sh ./api/wefit

WORKDIR /var/api/wefit

RUN npm install pm2 -g
RUN npm install
RUN npx prisma generate

CMD ["sh", "script.sh"]