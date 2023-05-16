FROM node:18-alpine3.16 AS build

RUN mkdir -p /app
WORKDIR /app
COPY . .

RUN yarn install --frozen-lockfile
RUN yarn cache clean
RUN yarn build


FROM node:18-alpine3.16

RUN mkdir -p /app
WORKDIR /app
COPY --from=build /app/.output /app/

ENV NUXT_HOST=0.0.0.0
ENV NUXT_PORT=3000

EXPOSE 3000 

ENTRYPOINT ["node", "/app/server/index.mjs"]