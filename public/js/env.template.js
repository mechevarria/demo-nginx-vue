// replaced as env.js at runtime by envsubst
(function (window) {
  window._env = window._env || { keycloak: {} };
  window._env.keycloak.url = '${KEYCLOAK_URL}' || 'http://localhost:8080/auth';
  window._env.keycloak.realm = '${KEYCLOAK_REALM}' || 'cp-sso';
  window._env.keycloak.id = '${KEYCLOAK_ID}' || 'vue';
  window._env.keycloak.enabled = '${KEYCLOAK}' || 'false';
})(this);