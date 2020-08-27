#!/usr/bin/env bash

npm run build

app=demo-buildpack-vue

cf push $app \
    -m 64M \
    -k 128M \
    -b https://github.com/cloudfoundry/nginx-buildpack.git \
    -c '$HOME/cf-custom-command.sh' \
    --no-start

cf se $app KEYCLOAK_URL $KEYCLOAK_URL
cf se $app KEYCLOAK false

cf start $app
