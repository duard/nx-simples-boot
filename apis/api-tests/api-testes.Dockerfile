FROM node:14-alpine AS development

WORKDIR /app
COPY package.json package-lock.json ./
COPY .env* ./
RUN npm install -g nx && npm install && npm install glob rimraf
ARG node_env=development
ENV NODE_ENV $node_env
EXPOSE 3000
EXPOSE 3333
COPY . .
# CMD ["nx", "serve", "api-tests"]

