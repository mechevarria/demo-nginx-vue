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
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import Sidebar from "./components/Sidebar.vue";

export default {
  name: "App",
  components: {
    Header,
    Footer,
    Sidebar
  }
}
</script>

<style>
@import "~@coreui/coreui/dist/css/coreui.min.css";
@import "~@coreui/icons/css/all.min.css";
@import "~perfect-scrollbar/css/perfect-scrollbar.css";
</style>
