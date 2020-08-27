#!/usr/bin/env bash

echo "Building to 'dist'"
npm run build

docker build -t quay.io/mechevarria/demo-nginx-vue .

docker push quay.io/mechevarria/demo-nginx-vue