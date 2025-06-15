<template>
    <div class="barbox">
      <h2>饼形图-年龄分布</h2>
      <div ref="chartRef" class="barshow"></div>
    </div>
  </template>
  
  <script setup>
  import * as echarts from 'echarts';
import { onMounted,ref } from 'vue';

const chartRef=ref(null)

onMounted(()=>{
  const myChart=echarts.init(chartRef.value)
  const option = {
    color: [
          "#065aab",
          "#066eab",
          "#0682ab",
          "#0696ab",
          "#06a0ab",
        ],
  tooltip: {
    trigger: 'item'
  },
  legend: {
    bottom: '0%',
    itemwidth:10,
    itemHeight: 10,
     // 修改图例组件的文字为 12px
     textStyle: {
        color: "rgba(255,255,255,.5)",
        fontSize: "12"
      }
  },
  series: [
    {
      name: '年龄分布',
      type: 'pie',
     // 设置饼形图在容器中的位置
     center:['50%','50%'],
    // 修改内圆半径和外圆半径为  百分比是相对于容器宽度来说的
      radius: ['40%', '60%'],
      avoidLabelOverlap: false,
      label: {
        show: false,
        position: 'center',
        
      },
       // 不显示连接线
      labelLine: { show: false },
      emphasis: {
        label: {
          show: true,
          fontSize: 40,
          fontWeight: 'bold'
        }
      },
      data: [
          { value: 1, name: "0岁以下" },
          { value: 4, name: "20-29岁" },
          { value: 2, name: "30-39岁" },
          { value: 2, name: "40-49岁" },
          { value: 1, name: "50岁以上" }
 ] ,
    }
  ]
};
  myChart.setOption(option)

  window.addEventListener('resize',()=>{
    myChart.resize()
})
})
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