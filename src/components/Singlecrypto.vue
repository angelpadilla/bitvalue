<template>
  <section>
    {{ currency }}
  </section>
</template>

<script>
import axios from "axios";

export default {
  name: "",
  props: {
    currency: String,
  },
  components: {},
  data() {
    return {};
  },
  created() {},
  mounted() {
    console.log(this.currency);
    axios
      .get(`https://api.coincap.io/v2/assets/${this.currency}`)
      .then((res) => {
        console.log(res.data.data);
        // this.assets = res.data.data
        // this.timestamp = Date.now()
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
  methods: {},
};
</script>

<style lang="scss" scoped></style>
