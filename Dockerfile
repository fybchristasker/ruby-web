FROM node:alpine

RUN mkdir -p /opt/app
RUN apk add --no-cache libc6-compat
ENV NODE_ENV production
ENV PORT 80
EXPOSE 80

WORKDIR /usr/src/app
COPY package.json .
COPY yarn.lock .
RUN npm install 
COPY . .
RUN npm run build
CMD [ "yarn", "start", "-p", "80" ]
