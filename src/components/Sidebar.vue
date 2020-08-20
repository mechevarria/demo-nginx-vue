<template>
  <div
    class="c-sidebar c-sidebar-dark c-sidebar-fixed c-sidebar-lg-show"
    :class="{ 'c-sidebar-minimized': sideBarMin }"
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
        <router-link class="c-sidebar-nav-link" to="/charts">
          <i class="c-sidebar-nav-icon cil-chart-pie"></i> Charts
        </router-link>
      </li>
      <li class="c-sidebar-nav-item">
        <router-link class="c-sidebar-nav-link" to="/table">
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
  name: "Sidebar",
  data() {
    return {
      isMin: false,
      sideBarMin: false
    };
  },
  methods: {
    toggleMin() {
      this.isMin = !this.isMin;
      this.sideBarMin = !this.sideBarMin;
      console.log(this.isMin);
    },
    handleMouse() {
      if (this.isMin) {
        this.sideBarMin = !this.sideBarMin;
      }
    }
  },
};
</script>