<template>
  <div class="barbox">
    <h2>折线图-人员变化</h2>
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
  color: ["#00f2f1", "#ed3f35"],
  legend:{
    textStyle:{
      color:"#4c9bfd"
    },
    right:'10%'
  },
  tooltip: {
      trigger: "axis"
    },
  grid:{
    left:"%3",
    top:"10%",
    right:'%4',
    bottom:'%3',
    show:true,
    // color:['#012f4a'],
    borderColor:"#012f4a",
    containLabel:true
    
  },
  xAxis: {
    type: 'category',
    axisTick:{
      show:false
    },
    axisLabel:{
      color:'#4c9bfd'
    },
    axisLine: {
        show: false // 去除轴线
       },
   boundaryGap: false , // 去除轴内间距
   data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
  },
  yAxis: {
    type: 'value',
       axisTick:{
      show:false
    },
    axisLabel:{
      color:'#4c9bfd'
    },
    splitLine:{
         lineStyle:{
           color:'#012f4a'
         }
       }
  },
  series: [
    {
     name:'新增粉丝',
      data:  [24, 40, 101, 134, 90, 230, 210, 230, 120, 230, 210, 120],
      type: 'line',
      smooth: true
      
    },
     {
      name:'新增游客',
      data: [40, 64, 191, 324, 290, 330, 310, 213, 180, 200, 180, 79],     
      type: 'line',
      smooth: true
      
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