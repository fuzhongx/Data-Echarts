<template>
  <div class="barbox">
    <h2>柱状图-就业行业 2019 2020</h2>
    <div ref="chartRef" class="barshow"></div>
  </div>
</template>

<script setup>
import * as echarts from "echarts";
import { onBeforeUnmount, onMounted, ref } from "vue";
const chartRef = ref(null);

onMounted(() => {
  const myChart = echarts.init(chartRef.value);
  const option = {
    color: ["#2f89cf"],
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "shadow",
      },
    },
    grid: {
      top: "10%",
      left: "0%",
      right: "0%",
      bottom: "4%",
      containLabel: true,
    },
    xAxis: [
      {
        type: "category",
        // boundaryGap: false,
        data: [
          "旅游行业",
          "教育培训",
          "游戏行业",
          "医疗行业",
          "电商行业",
          "社交行业",
          "金融行业",
        ],
        axisTick: {
          alignWithLabel: true,
        },
        axisLabel: {
          color: "rgba(255,255,255,.6)",
          fontSize: "12",
        },
        axisLine: {
          show: false,
        },
        splitLine: {
            lineStyle: {
              show:true,
              color: "rgba(255,255,255,.1)",
            },
          },
      },
    ],
    yAxis: [
      {
        type: "value",
        axisLabel: {
          color: "rgba(255,255,255,.6)",
          fontSize: "12",
        },
        axisLine: {
          lineStyle: {
            color: "rgba(255,255,255,.1)",
          },
         
        },
        splitLine: {
            lineStyle: {
              show:true,
              color: "rgba(255,255,255,.1)",
            },
          },
      },
    ],
    series: [
      {
        name: "Direct",
        type: "bar",
        barWidth: "35%",
        data: [200, 300, 300, 900, 1500, 1200, 600],
        itemStyle: {
          borderRadius: 5,
        },
      },
    ],
  };

  // 把配置给实例对象
  myChart.setOption(option);
  window.addEventListener('resize',handelRsize)

  onBeforeUnmount(()=>{
    if(myChart){
      window.removeEventListener('resize',handelRsize)
      myChart.dispose()
    }
  })
  function handelRsize(){
    myChart && myChart.resize()
  }
});
</script>

<style lang="scss" scoped>
.barbox {
  h2 {
    height: 0.625rem;
    color: #fff;
    font-size: 0.25rem;
    text-align: center;
    line-height: 0.625rem;
  }
  .barshow {
    height: 3rem;
  }
}
</style>
