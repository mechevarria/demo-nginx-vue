<template>
  <header class="c-header c-header-light c-header-fixed">
    <!-- shown in mobile view -->
    <button class="c-header-toggler c-class-toggler d-lg-none mfe-auto" type="button">
      <i class="c-icon c-icon-lg cil-menu"></i>
    </button>
    <router-link class="c-header-brand d-lg-none c-header-brand-sm-up-center" to="/">
      <img src="../assets/NS2-logo-blue.svg" alt="NS2 logo" width="86" />
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
        toggle-class="c-header-nav-link"
        class="c-header-nav-item d-md-down-none mx-2 dropdown app-dropdown"
        size="lg"
        right
        no-caret
      >
        <template v-slot:button-content>
          <a role="button">
            <i class="c-icon cil-bell"></i>
            <span class="badge badge-pill badge-info">1</span>
          </a>
        </template>
        <b-dropdown-header class="bg-light text-center app-pointer">
          <strong class="app-underline">Clear Events</strong>
        </b-dropdown-header>
        <b-dropdown-item>
          <i class="mr-1 c-icon cil-info text-info"></i> Message received
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
          <strong>{{ username }}</strong>
        </b-dropdown-header>
        <b-dropdown-item>
          <i class="mr-1 c-icon cil-shield-alt"></i> Account
        </b-dropdown-item>
        <b-dropdown-item>
          <i class="mr-1 c-icon cil-account-logout"></i> Logout
        </b-dropdown-item>
      </b-nav-item-dropdown>
    </ul>

    <Breadcrumbs />
  </header>
</template>

<script>
import Breadcrumbs from './Breadcrumbs.vue';
import { eventBus } from '../main';

export default {
  name: 'Header',
  components: {
    Breadcrumbs,
  },
  props: {
    username: {
      default: 'Guest',
    },
  },
  methods: {
    toggleSidebar() {
      eventBus.$emit('toggleSidebar')
    }
  }
};
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