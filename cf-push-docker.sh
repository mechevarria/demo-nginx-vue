#!/usr/bin/env bash

app=demo-nginx-vue

cf push $app \
    -m 64M \
    -k 256M \
    --docker-image quay.io/mechevarria/$app \
    --no-start

cf se $app KEYCLOAK_URL $KEYCLOAK_URL
cf se $app KEYCLOAK false

cf start $app
