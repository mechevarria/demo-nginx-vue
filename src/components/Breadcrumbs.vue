<template>
  <div class="c-subheader justify-content-between px-3">
    <ol class="breadcrumb border-0 m-0 px-0 px-md-3">
      <li class="breadcrumb-item" v-if="nameNotHome">
        <router-link to="/">Home</router-link>
      </li>
      <li class="breadcrumb-item active">
        <span>{{ $route.name }}</span>
      </li>
    </ol>
  </div>
</template>

<script>
export default {
    name: "Breadcrumbs",
    computed : {
      nameNotHome() {
        return this.$route.name !== 'Home'
      }
    }
}
</script>