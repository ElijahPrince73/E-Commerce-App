FROM node:12.2.0-alpine

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY package.json /app/package.json

RUN yarn
RUN yarn global add react-scripts@3.0.1

CMD ["yarn", "start"]