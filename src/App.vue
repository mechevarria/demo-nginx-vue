<template>
  <div id="app" class="c-app">
    <Sidebar />
    <div class="c-wrapper">
      <Header />
      <main class="c-main">
        <div class="container-fluid">
          <HelloWorld msg="Welcome to Your Vue.js App" />
        </div>
      </main>
      <Footer />
    </div>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import Sidebar from "./components/Sidebar.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
    Header,
    Footer,
    Sidebar
  },
};
</script>

<style>
@import "~@coreui/coreui/dist/css/coreui.min.css";
@import "~@coreui/icons/css/all.min.css";
@import "~perfect-scrollbar/css/perfect-scrollbar.css";
</style>
