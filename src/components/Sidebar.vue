<template>
  <div
    class="c-sidebar c-sidebar-dark c-sidebar-fixed"
    :class="{ 'c-sidebar-minimized': sideBarMin, 'c-sidebar-show': isShown }"
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
    <ul class="c-sidebar-nav" @mouseenter="handleMouse()" @mouseleave="handleMouse()">
      <!-- TODO close-on-mobile -->
      <li class="c-sidebar-nav-item">
        <router-link class="c-sidebar-nav-link" to="/charts"  @click.native="closeOnMobile">
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
import { eventBus } from '../main';

export default {
  name: 'Sidebar',
  data() {
    return {
      isMin: false,
      isShown: true,
      sideBarMin: false
    };
  },
  methods: {
    toggleMin() {
      this.isMin = !this.isMin;
      this.sideBarMin = !this.sideBarMin;
    },
    handleMouse() {
      if (this.isMin) {
        this.sideBarMin = !this.sideBarMin;
      }
    },
    closeOnMobile() {
      if(this.$isMobile()) {
        eventBus.$emit('toggleSidebar')
      }
    }
  },
  created() {
    eventBus.$on('toggleSidebar', () => {
      this.isShown = !this.isShown;
    });

    if(this.$isMobile()) {
      this.isShown = false;
    }
  }
};
</script>