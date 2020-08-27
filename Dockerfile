FROM nginx

COPY ./default.conf /etc/nginx/conf.d/

COPY ./docker-entrypoint.sh /usr/bin/

COPY ./dist /usr/share/nginx/html

ENTRYPOINT [ "/usr/bin/docker-entrypoint.sh" ]
CMD ["nginx", "-g", "daemon off;"]