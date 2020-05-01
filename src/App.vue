<template>
  <div id="app">
    <!-- Default component -->
    <AppHeader />

    <!-- Components from router -->
    <router-view />
  </div>
</template>

<script>
// @ is an alias to /src
import AppHeader from "@/components/Header.vue";

export default {
  components: {
    AppHeader,
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
body {
  background: hsl(0, 0%, 96%);
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
