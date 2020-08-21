<template>
  <div id="app" class="c-app">
    <Sidebar />
    <div class="c-wrapper">
      <Header />
      <main class="c-main">
        <div class="container-fluid">
          <router-view></router-view>
        </div>
      </main>
      <Footer />
    </div>
    <div
      :class="{'c-sidebar-backdrop c-fade c-show': sharedState.isSidebarShown && $isMobile()}"
      @click="doHide()"
    ></div>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import Sidebar from './components/Sidebar.vue'
import store from './store'

export default {
  name: 'App',
  components: {
    Header,
    Footer,
    Sidebar
  },
  data() {
    return {
      sharedState: store.state
    }
  },
  methods: {
    doHide() {
      store.toggleSidebarShown()
    }
  }
}
</script>

<style>
@import '~perfect-scrollbar/css/perfect-scrollbar.css';
@import '~@coreui/coreui/dist/css/coreui.min.css';
@import '~@coreui/icons/css/all.min.css';
@import '~bootstrap-vue/dist/bootstrap-vue.css';
</style>
