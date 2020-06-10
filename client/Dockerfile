# Dockerfile for client

FROM node:14

ENV CI=true

# Working directory for the app
WORKDIR /usr/app

COPY package.json ./

# Install dependencies
RUN yarn install

# Copy local files to app folder
COPY . .

EXPOSE 3000

CMD ["yarn", "start"]