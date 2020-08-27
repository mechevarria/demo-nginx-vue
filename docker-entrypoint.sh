#!/usr/bin/env bash

set -e

envsubst < /usr/share/nginx/html/js/env.template.js > /usr/share/nginx/html/js/env.js

exec "$@"