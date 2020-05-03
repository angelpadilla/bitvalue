<template>
  <div id="app" class="has-background-black-bis">
    <!-- Default component -->
    <AppHeader />

    <!-- Components from router -->
    <router-view />

    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import AppHeader from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";

export default {
  components: {
    AppHeader,
    Footer
  },
  methods: {
    get_date(val) {
      let ddd = new Date(val);

      return `${ddd.getHours()}:${ddd.getMinutes()}:${ddd.getSeconds()}`;
    },
  },
};
</script>

<style lang="scss">
// $dark: #121212;

body {
  // background: $dark;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

input {
  border-color: transparent !important;
}
</style>
