<template>
  <div>
    <canvas id="crypto-chart" height="300"></canvas>
  </div>
</template>

<script>
  import Chart from 'chart.js';
  export default {
    props: {
      symbol: {
        type: String,
        required: true
      },
      chartData: {
        type: Array,
        required: true
      }
    },
    data() {
      return {
        transformed: []
      }
    },
    mounted() {
      this.createChart('crypto-chart', this.chartData);
    },
    methods: {
      transformData (dataa) {
        for (const iterator of dataa) {
          this.transformed.push({x: iterator['time'], y: iterator['priceUsd']})
        }
      },
      async createChart(chartId, dataa) {
        await this.transformData(dataa);

        const ctx = document.getElementById(chartId);
    
        new Chart(ctx, {
          type: 'scatter',
          data: {
            datasets: [{
                label: this.symbol,
                data: this.transformed,
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgba(255, 99, 132, 0.2)',
                // borderWidth: 2,
                // lineTension: 0.2,
            }]
          },
          options: {
            scales: {
              xAxes: [{
                type: 'time',
                position: 'bottom',
                time: {
                  unit: 'month',
                }
              }],
              yAxes: [{
                position: 'right',
                ticks: {
                  beginAtZero: true,
                  callback: function(value) {
                    if(parseInt(value) >= 1000){
                      return '$' + value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                    } else {
                      return '$' + value;
                    }
                  }
                }
              }]
            }
          }
        });
      }
    },
  }
</script>

<style lang='scss' scoped>
  canvas {
    margin-top: 2rem;
    width: 100%;
    max-width: 100%;
  }
</style>