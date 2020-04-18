<template>
  <div class="main_cont">
    <section class="one">
      
    </section>

    <section class=" two">
      <div class="container">
        <table class="table is-hoverable is-fullwidth">
          <thead>
            <tr>
              <th>Nombre</th>
              <th class="has-text-right">Precio USD</th>
              
            </tr>
          </thead>
          <tbody>
            <tr v-for="asset in assets" :key="asset.id">
              <td>
                <img v-bind:src="`https://static.coincap.io/assets/icons/${asset.symbol.toLowerCase()}@2x.png`" alt="Coin logo">
                <p>
                  {{asset.name}} <br>
                  <span>{{asset.symbol}}</span>
                </p>

              </td>
              <td class="has-text-right">
                <p>
                  {{ asset.priceUsd | currency  }}
                </p>
                <span v-if="asset.changePercent24Hr >= 0" class="change has-text-primary" >
                  {{ asset.changePercent24Hr | format_number }}%
                </span>
                <span v-else class="change has-text-danger" >
                  {{ asset.changePercent24Hr | format_number }}%
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
  import axios from 'axios'

  export default {
    name:'',
    data() {
      return {
        assets: [],
        timestamp: null
      }
    },
    mounted() {
      axios.get('https://api.coincap.io/v2/assets?limit=100')
      // eslint-disable-next-line no-unused-vars
      .then(res => {
        // console.log(res.data.data)
        this.assets = res.data.data
        this.timestamp = res.data.timestamp
      })

      const pricesWs = new WebSocket('wss://ws.coincap.io/prices?assets=ALL')

      pricesWs.onmessage = (msg) => {
        // returns an object
        // console.log(msg.data)


        this.timestamp = msg.timeStamp

        let ob = JSON.parse(msg.data)

        for (const key in ob) {

          // console.log(`key: ${key} ... value: ${ob[key]}`)
          let index = this.assets.findIndex(el => el.id == key)

          if (index >= 0) {

            // console.log('Elemento encontrado')
            // console.log(this.assets[index].id)
            this.assets[index].priceUsd = ob[key]

          } 

        }

      }
    },
  }
</script>

<style lang="scss" scoped>
  table {
    box-shadow: 0px 2px 12px #d0d0d0;
    thead {
      background: #f5f5f5;
      tr {
        th {
          padding: 0.3rem 1rem !important;
        }

      }
    }
    tbody {
      td {
        padding: 0.3rem 1rem;
        img {
          height: 2rem;
          margin-right: 1rem;
        }
        img, p {
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

  .main_cont {
    background: #ECEFF2;
  }

  .one {
    padding: 1rem 0 8rem 0;
    background: linear-gradient(180deg, rgba(98,223,67,1) 0%, rgba(207,255,0,1) 83%);
  }

  .two {
    padding-bottom: 4rem;
    // background: #ECEFF2;
    .container {
      margin-top: -6rem;
    }
  }
</style>