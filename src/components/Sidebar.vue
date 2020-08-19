<template>
  <div class="c-sidebar c-sidebar-dark c-sidebar-fixed c-sidebar-show">
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
    <!-- add mouse-enter and mouse-leave functions -->
    <ul class="c-sidebar-nav">
      <!-- add active route class and close-on-mobile -->
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
    <button class="c-sidebar-minimizer c-class-toggler" type="button"></button>
  </div>
</template>

<script>
export default {
  name: "Sidebar"
};
</script>