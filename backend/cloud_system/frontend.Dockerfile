FROM nginx:1.25.2-alpine

COPY ./dist/app .etc/nginx/html/