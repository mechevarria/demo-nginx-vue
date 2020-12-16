<template>
  <div class="c-subheader justify-content-between px-3">
    <ol class="breadcrumb border-0 m-0">
      <li
        class="breadcrumb-item"
        v-for="(route, index) in breadcrumbs"
        :key="index"
        v-bind:class="{ active: index === breadcrumbs.length -1}"
      >
        <router-link v-if="index !== breadcrumbs.length -1" :to="{ name: route }">{{ upperFirst(route) }}</router-link>
        <span v-else>{{ upperFirst(route) }}</span>
      </li>
    </ol>
  </div>
</template>

<script>
export default {
  name: 'AppBreadcrumbs',
  computed: {
    breadcrumbs() {
      const breadcrumbs = this.$route.fullPath.split('/')
      breadcrumbs.shift()
      return breadcrumbs
    }
  },
  methods: {
    upperFirst(str) {
      return str.charAt(0).toUpperCase() + str.slice(1)
    }
  }
}
</script>

