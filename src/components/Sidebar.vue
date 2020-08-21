<template>
  <div
    class="c-sidebar c-sidebar-dark c-sidebar-fixed"
    :class="{ 'c-sidebar-minimized': $store.state.isSidebarMin, 'c-sidebar-show': $store.state.isSidebarShown }"
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
export default {
  name: 'AppSidebar',
  data() {
    return {
      isMouseEnter: false
    }
  },
  methods: {
    toggleMin() {
      this.$store.commit('toggleSidebarMin')
    },
    mouseEnter() {
      if (this.$store.state.isSidebarMin) {
        this.$store.commit('sidebarMax')
        this.isMouseEnter = true
      }
    },
    mouseLeave() {
      if (this.isMouseEnter) {
        this.$store.commit('sidebarMin')
        this.isMouseEnter = false
      }
    },
    closeOnMobile() {
      if (this.$isMobile()) {
        this.$store.commit('sidebarHide')
      }
    }
  },
  created() {
    if (this.$isMobile() && this.$store.state.isSidebarShown) {
      this.$store.commit('sidebarHide')
    }
  }
}
</script>