# Dockerfile for Node Express backend API

# INSTRUCTION arguments

FROM node:10

# ARG NODE_ENV=development

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install dependencies
COPY package*.json ./

RUN npm ci

# Copy app source code
COPY . .

# Expose ports
EXPOSE 8080

CMD ["npm", "start"]