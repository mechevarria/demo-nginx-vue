#!/usr/bin/env bash

docker run \
    -p 80:80 \
    --env KEYCLOAK=$KEYCLOAK \
    --env KEYCLOAK_URL=$KEYCLOAK_URL \
    quay.io/mechevarria/demo-nginx-vue
