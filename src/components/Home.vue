<template>
  <div>
    <div
      class="task-modal"
      v-if="isOpen"
      
    >
      <router-view/>
    </div>


    <section class="one"></section>

    <section class="two">
      <div class="container">
        <div class="">
          <p class="control has-icons-left">
            <input
              class="input"
              type="text"
              placeholder="Busqueda"
              v-model="search"
            />
            <span class="icon is-small is-left">
              <i class="fas fa-search"></i>
            </span>
          </p>
        </div>

        <table class="table is-hoverable is-fullwidth">
          <thead>
            <tr>
              <th>Name</th>
              <th class="has-text-right">Price USD</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="asset in filteredList" :key="asset.id">
              <td>
                <router-link
                  :to="{ name: 'Singlecrypto', params: { currency: asset.id } }"
                >
                  <img
                    v-bind:src="
                      `https://static.coincap.io/assets/icons/${asset.symbol.toLowerCase()}@2x.png`
                    "
                    alt="Coin logo"
                  />
                  <p>
                    {{ asset.name }} <br />
                    <span>{{ asset.symbol }}</span>
                  </p>
                </router-link>
              </td>
              <td class="has-text-right">
                <p>
                  {{ asset.priceUsd | currency }}
                </p>
                <span
                  v-if="asset.changePercent24Hr >= 0"
                  class="change has-text-primary"
                >
                  {{ asset.changePercent24Hr | format_number }}%
                  <i class="fas fa-sort-up"></i>
                </span>
                <span v-else class="change has-text-danger">
                  {{ asset.changePercent24Hr | format_number }}%
                  <i class="fas fa-sort-down"></i>
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  </div>
</template>

<script>
import Crypto from '@/axios/coincap';
import mixins from '../mixins';

export default {
  mixins: [mixins],
  data() {
    return {
      assets: [],
      timestamp: null,
      search: '',
    };
  },
  mounted() {
    Crypto.getCryptos().then((res) => {
      // console.log(res.data.data)
      this.assets = res.data.data;
      // this.timestamp = res.data.timestamp
      this.timestamp = Date.now();
    });

    const pricesWs = new WebSocket('wss://ws.coincap.io/prices?assets=ALL');

    pricesWs.onmessage = (msg) => {
      // returns an object
      // console.log(msg.data)

      this.timestamp = Date.now();

      let ob = JSON.parse(msg.data);

      for (const key in ob) {
        // console.log(`key: ${key} ... value: ${ob[key]}`)
        let index = this.assets.findIndex((el) => el.id == key);

        if (index >= 0) {
          this.assets[index].priceUsd = ob[key];
        }
      }
    };
  },
  computed: {
    filteredList() {
      return this.assets.filter((asset) => {
        return asset.name.toLowerCase().includes(this.search.toLowerCase());
      });
    },
    isOpen () {
      return this.$route.name === 'Singlecrypto'
    }
  },
};
</script>

<style lang="scss" scoped>
table {
  // box-shadow: 0px 2px 12px #d0d0d0;
  thead {
    background: #f5f5f5;
    tr {
      th {
        padding: 0.3rem 1rem !important;
        vertical-align: middle;
      }
    }
  }
  tbody {
    // tr {
    //   cursor: pointer;
    // }
    td {
      padding: 0.3rem 1rem;
      img {
        height: 2rem;
        margin-right: 1rem;
      }
      img,
      p {
        display: inline-block;
      }
      p {
        font-weight: 600;
        span {
          font-weight: 400;
        }
      }
      .change {
        display: block;
      }
    }
  }
}

.one {
  padding: 1rem 0 13rem 0;
  
}

.two {
  padding-bottom: 20rem;
  // background: #ECEFF2;
  .container {
    margin-top: -12rem;
  }
}
</style>
