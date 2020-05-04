<template>
  <section class="footer">
    <div class="container">
      <p>
        <strong>Bitvalue</strong> by
        <a href="#!">Angel Padilla</a>
      </p>
    </div>
  </section>
</template>

<script>
  export default {
    name:'',
    props: {},
    components: {},
    data() {
      return {}
    },
    created() {},
    mounted() {},
    computed: {},
    methods: {},
  }
</script>

<style lang='scss' scoped>

// estilos para dark theme
$dark-bg: #363636;
$text-dark: #c2c2c2;
$text-dark-light: #e7e7e7;

  .footer {
    color: $text-dark;
    a {
      &:hover {
        color: $text-dark-light;
      }
    }
    strong {
      color: $text-dark-light;

    }
  }
</style>