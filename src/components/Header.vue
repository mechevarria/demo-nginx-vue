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
    >
      <i class="c-icon c-icon-lg cil-menu"></i>
    </button>

    <!-- top right menu -->
    <ul class="c-header-nav ml-auto">
      <!-- notification menu-->
      <li class="c-header-nav-item d-md-down-none mx-2 dropdown" placement="bottom right">
        <a
          class="c-header-nav-link dropdown-toggle app-no-caret"
          href
          role="button"
          aria-haspopup="true"
          aria-expanded="false"
        >
          <i class="c-icon cil-bell"></i>
          <span class="badge badge-pill badge-info">1</span>
        </a>
        <div class="dropdown-menu dropdown-menu-right dropdown-menu-lg pt-0">
          <div class="dropdown-header bg-light text-center app-pointer">
            <strong class="app-underline">Clear Events</strong>
          </div>
          <a class="dropdown-item">
            <i class="mr-1 c-icon cil-info text-info"></i>
            Message received
          </a>
        </div>
      </li>

      <!-- User Menu -->
      <li class="c-header-nav-item d-md-down-none mx-2 dropdown" placement="bottom right">
        <a
          class="c-header-nav-link dropdown-toggle mr-2"
          href
          role="button"
          aria-haspopup="true"
          aria-expanded="false"
        >
          <i class="mr-1 c-icon cil-user"></i>
        </a>
        <div class="dropdown-menu dropdown-menu-right pt-0" aria-labelledby="navbarDropdown">
          <div class="dropdown-header bg-light text-center">
            <strong>{{ username }}</strong>
          </div>
          <a class="dropdown-item app-pointer">
            <i class="mr-1 c-icon cil-shield-alt"></i> Account
          </a>
          <a class="dropdown-item app-pointer">
            <i class="mr-1 c-icon cil-account-logout"></i> Logout
          </a>
        </div>
      </li>
    </ul>

    <Breadcrumbs />
  </header>
</template>

<script>
import Breadcrumbs from './Breadcrumbs.vue'

export default {
  name: "Header",
  components: {
    Breadcrumbs
  },
  props: {
    username: {
      default: "Guest",
    },
  }
};
</script>

<style scoped>
.app-no-caret::after {
  display: none;
}

.app-pointer {
  cursor: pointer !important;
}

.app-underline:hover {
  text-decoration: underline;
}

.app-scrollable-menu {
  height: auto;
  max-height: 500px;
  overflow-x: hidden;
}
</style>