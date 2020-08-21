<template>
  <div
    class="c-sidebar c-sidebar-dark c-sidebar-fixed"
    :class="{ 'c-sidebar-minimized': sharedState.isSidebarMin, 'c-sidebar-show': sharedState.isSidebarShown }"
    id="sidebar"
  >
    <div class="c-sidebar-brand d-md-down-none">
      <router-link to="/">
        <img
          class="c-sidebar-brand-full"
          src="../assets/NS2-logo-white.svg"
          alt="NS2 logo"
          width="86"
        />
        <img
          class="c-sidebar-brand-minimized"
          src="../assets/NS2-icon-white.svg"
          height="30"
          alt="NS2 Logo"
        />
      </router-link>
    </div>
    <ul class="c-sidebar-nav" @mouseenter="mouseEnter" @mouseleave="mouseLeave">
      <li class="c-sidebar-nav-item">
        <router-link class="c-sidebar-nav-link" to="/charts" @click.native="closeOnMobile">
          <i class="c-sidebar-nav-icon cil-chart-pie"></i> Charts
        </router-link>
      </li>
      <li class="c-sidebar-nav-item">
        <router-link class="c-sidebar-nav-link" to="/table" @click.native="closeOnMobile">
          <i class="c-sidebar-nav-icon cil-list"></i> Table
        </router-link>
      </li>
      <li class="c-sidebar-nav-item">
        <a class="c-sidebar-nav-link" href="https://github.com/mechevarria" target="_blank">
          <i class="c-sidebar-nav-icon cib-github"></i> Github
        </a>
      </li>
    </ul>
    <button class="c-sidebar-minimizer c-class-toggler" type="button" @click="toggleMin"></button>
  </div>
</template>

<script>
import store from '../store'

export default {
  name: 'Sidebar',
  data() {
    return {
      sharedState: store.state,
      isMouseEnter: false
    }
  },
  methods: {
    toggleMin() {
      store.toggleSidebarMin()
    },
    mouseEnter() {
      if (this.sharedState.isSidebarMin) {
        store.toggleSidebarMin()
        this.isMouseEnter = true
      }
    },
    mouseLeave() {
      if (this.isMouseEnter) {
        store.toggleSidebarMin()
        this.isMouseEnter = false
      }
    },
    closeOnMobile() {
      if (this.$isMobile()) {
        store.toggleSidebarShown()
      }
    }
  },
  created() {
    if (this.$isMobile() && this.sharedState.isSidebarShown) {
        store.toggleSidebarShown()
    }
  }
}
</script>