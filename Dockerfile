FROM node:22-alpine AS build

RUN mkdir -p /app
WORKDIR /app
COPY . .

RUN npm ci
RUN npm cache clean --force
RUN npm run build


FROM node:22-alpine

RUN mkdir -p /app
WORKDIR /app
COPY --from=build /app/.output /app/

ENV NUXT_HOST=0.0.0.0
ENV NUXT_PORT=3000

EXPOSE 3000 

ENTRYPOINT ["node", "/app/server/index.mjs"]