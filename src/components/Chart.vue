<template>
  <div>
    <canvas id="crypto-chart" width="100%" height="100"></canvas>
  </div>
</template>

<script>
  import Chart from 'chart.js';
  export default {
    props: {},
    data() {
      return {}
    },
    mounted() {
      // console.log(chartData)
      this.createChart('crypto-chart');
    },
    methods: {
      createChart(chartId) {
        const ctx = document.getElementById(chartId);

        new Chart(ctx, {
          type: 'line',
          data: {
            labels: ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptune'],
            datasets:[{
              data: [12, 19, 3, 5, 2, 3],
              backgroundColor: [
                  'rgba(255, 99, 132, 0.2)',
                  
              ],
              borderColor: [
                  'rgba(255, 99, 132, 1)',
              ],
              borderWidth: 1
            }]
          },
          options: {
            scales: {
              yAxes: [{
                  ticks: {
                      beginAtZero: true
                  }
              }]
            }
          },
        });
      }
    },
  }
</script>

<style lang='scss' scoped>
</style>