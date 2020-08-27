#!/usr/bin/env bash

echo "Running environment variable replacement commands via bash since envsubst is not available"
cp ./dist/js/env.template.js ./dist/js/env.js

search='${KEYCLOAK_URL}'
replace=$KEYCLOAK_URL
sed -i s@$search@$replace@g ./dist/js/env.js

search='${KEYCLOAK_REALM}'
replace=$KEYCLOAK_REALM
sed -i s@$search@$replace@g ./dist/js/env.js

search='${KEYCLOAK_ID}'
replace=$KEYCLOAK_ID
sed -i s@$search@$replace@g ./dist/js/env.js

search='${KEYCLOAK}'
replace=$KEYCLOAK
sed -i s@$search@$replace@g ./dist/js/env.js

echo "Running buildpack command"
varify -buildpack-yml-path ./buildpack.yml ./nginx.conf $HOME/modules $DEP_DIR/nginx/modules && nginx -p $PWD -c ./nginx.conf
