# Dockerfile for client

FROM node:10

# Working directory for the app
WORKDIR /usr/app

COPY package*.json ./

# Install dependencies
RUN yarn install

# Copy local files to app folder
COPY . .

EXPOSE 3000

CMD ["yarn", "start"]