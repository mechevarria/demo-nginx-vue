<template>
  <header class="c-header c-header-light c-header-fixed">
    <!-- shown in mobile view -->
    <button
      class="c-header-toggler c-class-toggler d-lg-none mfe-auto"
      type="button"
      @click="toggleSidebar"
    >
      <i class="c-icon c-icon-lg cil-menu"></i>
    </button>
    <router-link class="c-header-brand d-lg-none c-header-brand-sm-up-center" to="/">
      <img src="../assets/symphony-ai-logo-full-color.svg" alt="SAI logo" width="150" />
    </router-link>

    <!-- toggle sidebar -->
    <button
      class="c-header-toggler c-class-toggler mfs-3 d-md-down-none"
      type="button"
      responsive="true"
      @click="toggleSidebar"
    >
      <i class="c-icon c-icon-lg cil-menu"></i>
    </button>

    <!-- top right menu -->
    <ul class="c-header-nav ml-auto">
      <!-- notification menu-->
      <b-nav-item-dropdown
        ref="dropdown"
        toggle-class="c-header-nav-link"
        class="c-header-nav-item d-md-down-none mx-2 dropdown app-dropdown"
        size="lg"
        right
        no-caret
      >
        <template v-slot:button-content>
          <a role="button">
            <i class="c-icon cil-bell"></i>
            <span class="badge badge-pill badge-info" v-if="messages.length > 0">{{messages.length}}</span>
          </a>
        </template>
        <b-dropdown-header class="bg-light text-center app-pointer" @click="clear">
          <strong class="app-underline">Clear Events</strong>
        </b-dropdown-header>
        <b-dropdown-item v-for="(msg, key) in messages" :key="key">
          <i :class="[msg.iconClass, msg.textClass]" class="mr-2 c-icon"></i>
          {{ msg.text }}
        </b-dropdown-item>
      </b-nav-item-dropdown>

      <!-- User Menu -->
      <b-nav-item-dropdown
        toggle-class="c-header-nav-link"
        class="c-header-nav-item d-md-down-none mx-2 dropdown app-dropdown"
        size="lg"
        right
        no-caret
      >
        <template v-slot:button-content>
          <a role="button">
            <i class="mr-1 c-icon cil-user"></i>
          </a>
        </template>
        <b-dropdown-header class="bg-light text-center">
          <strong>Guest</strong>
        </b-dropdown-header>
        <b-dropdown-item>
          <i class="mr-1 c-icon cil-shield-alt"></i> Account
        </b-dropdown-item>
        <b-dropdown-item>
          <i class="mr-1 c-icon cil-account-logout"></i> Logout
        </b-dropdown-item>
      </b-nav-item-dropdown>
    </ul>

    <AppBreadcrumbs />
  </header>
</template>

<script>
import AppBreadcrumbs from './Breadcrumbs.vue'
import { mapState } from 'vuex'

export default {
  name: 'AppHeader',
  components: {
    AppBreadcrumbs
  },
  computed: mapState(['messages']),
  methods: {
    toggleSidebar() {
      this.$store.commit('toggleSidebarShown')
    },
    clear() {
      this.$store.commit('clearMessages')
      this.$refs.dropdown.hide(true)
    }
  }
}
</script>

<style>
/* style fix for dropdown menu */
.app-dropdown > ul {
  right: auto !important;
  height: auto;
  max-height: 500px;
  overflow-x: hidden;
  padding-top: 0px !important;
}
.app-pointer {
  cursor: pointer !important;
}

.app-underline:hover {
  text-decoration: underline;
}
</style>