<template>
       <nav class="navbar" role="navigation" aria-label="main navigation">
         <div class="container">
            <div class="navbar-brand">
              <a class="navbar-item" href="/" title="Inicio">
                <img src="../assets/logo.png">
              </a>

              <a role="button" class="navbar-burger burger is-active" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
              </a>
            </div>

            <div id="navbarBasicExample" class="navbar-menu">
              <div class="navbar-start">

                <router-link :to="{name: 'Home'}" class="navbar-item">Criptomonedas</router-link>
                <router-link to="/rates" class="navbar-item">Tipos de cambio</router-link>

               

                <div class="navbar-item has-dropdown is-hoverable">
                  <a class="navbar-link">
                    Más
                  </a>

                  <div class="navbar-dropdown">
                    <a class="navbar-item">
                      Contacto
                    </a>
                    
                    
                  </div>
                </div>
              </div>

              <div class="navbar-end">
                <div class="navbar-item">
                  <div class="buttons">
                    <a class="button is-primary">
                      <strong>Acceso</strong>
                    </a>
                    
                  </div>
                </div>
              </div>
            </div>

         </div>
      </nav>
   
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

<style scoped lang="scss">
  .navbar-brand {
    img {
      height: 2rem;
    }
  }
</style>