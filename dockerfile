FROM ghcr.io/erickstorck/simple-crud/dependencies:latest AS build
COPY . .
RUN yarn build --configuration production

FROM nginx:alpine AS release
COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf
COPY --from=build /build/simple-crud/dist/app /usr/share/nginx/html
EXPOSE 80