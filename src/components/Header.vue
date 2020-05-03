<template>
  <div>
    <nav class="navbar is-dark is-fixed-top" role="navigation" aria-label="main navigation">
        <div class="container">
          <div class="navbar-brand">
            <router-link
              :to="{ name: 'Home' }"
              class="navbar-item"
              title="Inicio"
              >
                <img src="../assets/logo.png" />
            </router-link>

            <a
              role="button"
              class="navbar-burger burger"
              :class="{ 'is-active': isActive }"
              aria-label="menu"
              aria-expanded="false"
              data-target="navbar_content"
              @click="toggleNav"
            >
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </a>
          </div>

            <div
              id="navbar_content"
              class="navbar-menu"
              :class="{ 'is-active': isActive }"
            >
              <div class="navbar-start">
                <router-link
                  :to="{ name: 'Home' }"
                  class="navbar-item"
                  :class="{ 'is-active': this.$route.name == 'Home' }"
                  >Criptomonedas</router-link
                >
                <router-link :to="{ name: 'Rates' }" class="navbar-item" :class="{ 'is-active': this.$route.name == 'Rates' }"
                  >Tipos de cambio</router-link
                >

                <div v-if="false" class="navbar-item has-dropdown is-hoverable">
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
                <div class="navbar-item" v-if="false">
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
    <div v-if="searchActive" class="has-background-black-bis">
      <div class="container">
        <div class="search_cont">
          <p class="control has-icons-left">
            <input
              class="input"
              type="text"
              placeholder="Buscar"
              v-model="search"
            />
            <span class="icon is-small is-left">
              <i class="fas fa-search"></i>
            </span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isActive: false,
      searchActive: false,
      search: '',
    };
  },
  methods: {
    toggleNav() {
      this.isActive = !this.isActive;
    },
  },
};
</script>

<style scoped lang="scss">
$dark-bg: #363636;
$text-dark: #c2c2c2;
$text-dark-light: #e7e7e7;

.navbar-brand {
  img {
    height: 2rem;
  }
}




// Estilos para dark
.navbar-dropdown {
  border-top: none;
  background: $dark-bg;
}
.has-dropdown {
  a::after {
    border-color: $text-dark !important;
  }
}

.search_cont {
  padding: 2rem 0;
  input {
    border-color: transparent;
  }
}


.navbar {
 a {
   color: $text-dark !important;
   font-size: 0.8rem;
   &:hover {
    color: $text-dark-light !important;
    background: none !important;

  }
 } 
}

</style>
