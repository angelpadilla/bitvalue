<template>
  <div>
    <div class="modal is-active">
      <div class="modal-background" @click="close"></div>
      <div class="modal-content">
        <div class="box" v-if="fullLoaded">
          <article class="media">
            <div class="media-left">
              <figure class="image is-64x64">
                <img
                    v-bind:src="
                      `https://static.coincap.io/assets/icons/${symbol.toLowerCase()}@2x.png`
                    "
                    alt="Coin logo"
                  />
              </figure>
            </div>
            <div class="media-content">
              <div class="content">
                <h3>{{ name }} ({{symbol}}) </h3>
                <div class="columns">
                  <div class="column">
                    <strong>Rank</strong>
                    #{{rank}}
                  </div>
                  <div class="column">
                    <strong v-if="changePercent24Hr >= 0" class="has-text-primary">
                      {{ changePercent24Hr | format_number }}%
                      <i class="fas fa-sort-up"></i>
                    </strong>
                    <strong v-else class="has-text-danger">
                      {{ changePercent24Hr | format_number }}%
                      <i class="fas fa-sort-down"></i>
                    </strong>
                  </div>
                </div>
                <div class="columns">
                  <div class="column">
                    <strong>Precio USD </strong><br>
                    {{ priceUsd | currency }}
                  </div>
                  <div class="column">
                    <strong>Market Cap </strong><br>
                    {{ marketCapUsd | currency }}
                  </div>
                </div>
                <div class="columns">
                  <div class="column">
                    <strong>Volume 24hr </strong><br>
                    {{ volumeUsd24Hr | currency }}
                  </div>
                  <div class="column">
                    <strong>Supply </strong><br>
                    {{ supply | currency }}
                  </div>
                </div>
                
                <Chart />
              </div>
              
            </div>
          </article>
        </div>
        <div v-else class="has-text-centered">
          <i class="fas fa-circle-notch fa-spin" style="color: white"></i>
        </div>

      </div>
      <button class="modal-close is-large" aria-label="close" @click="close"></button>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Chart from "./Chart";

export default {
  props: {
    currency: String,
  },
  components: {
    Chart
  },
  data() {
    return {
      changePercent24Hr: '',
      marketCapUsd: '',
      name: '',
      priceUsd: '',
      rank: '',
      supply: '',
      symbol: '',
      volumeUsd24Hr: '',
      vwap24Hr: '',
      fullLoaded: false
    };
  },
  created() {},
  mounted() {
    console.log(this.currency);
    axios
      .get(`https://api.coincap.io/v2/assets/${this.currency}`)
      // eslint-disable-next-line no-unused-vars
      .then((res) => {
        console.log(res.data.data);
        this.changePercent24Hr = res.data.data.changePercent24Hr
        this.marketCapUsd = res.data.data.marketCapUsd
        this.name = res.data.data.name
        this.priceUsd = res.data.data.priceUsd
        this.rank = res.data.data.rank
        this.supply = res.data.data.supply
        this.rank = res.data.data.rank
        this.symbol = res.data.data.symbol
        this.volumeUsd24Hr = res.data.data.volumeUsd24Hr
        this.vwap24Hr = res.data.data.vwap24Hr
        this.fullLoaded = true
      });

    axios
      .get(
        `https://api.coincap.io/v2/assets/${this.currency}/history?interval=d1`
      )
      .then((res) => {
        console.log(res.data.data);
        // this.assets = res.data.data
        // this.timestamp = Date.now()
      });
  },
  computed: {},
  methods: {
    close () {
      this.$router.push({ name: 'Home' })
    },
  },
};
</script>

<style lang="scss" scoped></style>
