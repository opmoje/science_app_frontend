<template>
  <div>
    <CCardGroup columns class="card-columns cols-2">
      <CCard>
        <CCardBody style="max-width: 750px">
          <img src="/img/chart1.png" width="100%">
        </CCardBody>
      </CCard>
      <CCard>
        <CCardBody style="max-width: 750px">
          <img src="/img/chart4.png" width="100%">
        </CCardBody>
      </CCard>
      <CCard>
        <CCardBody style="max-width: 750px">
          <img src="/img/chart3.png" width="100%">
        </CCardBody>
      </CCard>
      <CCard>
        <CCardBody style="max-width: 750px">
          <img src="/img/chart2.png" width="100%">
        </CCardBody>
        <!--<CCardHeader>Обьем финансирования, тыс. руб.</CCardHeader>
        <CCardBody style="height: 644px">
          <CChartDoughnut
            :datasets="fundingSources2019.datasets"
            :labels="fundingSources2019.labels"
          />
        </CCardBody>-->
      </CCard>

    </CCardGroup>
  </div>
</template>

<script>
  import {CChartBar, CChartDoughnut} from "@coreui/vue-chartjs";

  export default {
    name: 'index',
    components: {
      CChartBar,
      CChartDoughnut
    },
    data: function () {
      return {
        options: {
          legend: {display: true},
          responsive: true
        },
        fundingSources2019: {
          datasets: [{
            data: [
              192000, 15200, 4000, 0, 0, 0
            ],

            label: 'Dataset 1'
          }],
          labels: [
            'Государственные фонды', 'РФФИ', 'Российский научный фонд',
            'Фонд перспективных исследований', 'Другие', 'Российские негосударственные фонды'
          ],
        }
      }
    },
    methods: {}
  }
</script>

<style>
  /* IE fix */
  #card-chart-01, #card-chart-02 {
    width: 100% !important;
  }
</style>
