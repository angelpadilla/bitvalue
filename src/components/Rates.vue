<template>
  <div>
    <section class="one"></section>

    <section class="two">
      <div class="container">
        <p style="margin-bottom: 20px" v-if="false">
          Última actualización {{ get_date(timestamp) }} Hrs
        </p>

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

        <table class="table is-hoverable is-fullwidth">
          <thead>
            <tr>
              <th>Moneda</th>
              <th class="has-text-right">Dolar a moneda local</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="rate in filteredList" :key="rate.id">
              <td>
                <p>
                  <span class="has-text-info">{{ rate.currencySymbol }}</span>
                  {{ rate.id | format_string_to_uppcercase }}<br />
                  <span>{{ rate.symbol }}</span>
                </p>
              </td>
              <td class="has-text-right">
                <p>
                  {{ Number.parseFloat(1 / rate.rateUsd).toFixed(4) }}
                </p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  </div>
</template>

<script>
import Crypto from "@/axios/coincap";
import mixins from "../mixins";
export default {
  name: "",
  props: {},
  mixins: [mixins],
  components: {},
  data() {
    return {
      rates: [],
      timestamp: null,
      search: "",
    };
  },
  created() {},
  mounted() {
    this.update_rates();
  },
  computed: {
    filteredList() {
      return this.rates.filter((rate) => {
        return rate.id.toLowerCase().includes(this.search.toLowerCase());
      });
    },
  },
  methods: {
    update_rates() {
      Crypto.getRates().then((res) => {
        this.rates = res.data.data;
        this.timestamp = res.data.timestamp;
      });
    },
  },
};
</script>

<style lang="scss" scoped>
table {
  box-shadow: 0px 2px 12px #d0d0d0;
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
    td {
      padding: 0.3rem 1rem;
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
  padding: 6rem 0 8rem 0;
  background: linear-gradient(
    180deg,
    rgba(98, 223, 67, 1) 0%,
    rgba(207, 255, 0, 1) 83%
  );
}

.two {
  padding-bottom: 4rem;
  // background: #ECEFF2;
  .container {
    margin-top: -10rem;
  }
}
</style>
