FROM node:14.16.1

EXPOSE 3000

RUN mkdir app/

WORKDIR /app/

COPY yarn.lock package.json /app/

RUN yarn install

COPY . .

CMD [ "yarn", "start" ]
