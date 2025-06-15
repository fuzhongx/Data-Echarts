<template>
    <div class="barbox">
      <h2>柱状图-技能掌握</h2>
      <div ref="chartRef" class="barshow"></div>
    </div>
  </template>
  
  <script setup>
  import * as echarts from 'echarts';
import { onMounted,ref } from "vue";
  const chartRef=ref(null)
  
  onMounted(()=>{
   const mychart=echarts.init(chartRef.value)
var myColor = ["#1089E7", "#F57474", "#56D0E3", "#F8B448", "#8B78F6"];
const option = {
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'shadow'
    }
  },
  // legend: {},
  grid: {
    top: '10%',
    left: '22%',
    bottom: '10%',
    // containLabel: true
  },
  xAxis: {
   show:false
  },
  yAxis:[
     {
    type: 'category',
    data:["HTML5", "CSS3", "javascript", "VUE", "NODE"],
    axisLine:{
      show:false
    },
    axisTick:{
      show:false
    },
    axisLabel:{
        color:"#fff"
    }
  },
  {
    data: [702, 350, 610, 793, 664],
    axisLine:{
      show:false
    },
    axisTick:{
      show:false
    },
    axisLabel:{
        color:"#fff"
    }
  }
  ],
  series: [
    {
      name: '条',
      type: 'bar',
      data: [70, 34, 60, 78, 69],
      yAxisIndex: 0,
      itemStyle:{
        borderRadius:20,
        color:function (params){
          // params.dataIndex 当前柱子索引号
          return myColor[params.dataIndex]
        }
      },
      //柱子间的距离
      barCategoryGap:50,
      barWidth:10,
      label:{
        show:true,
        position:'inside',
        formatter:'{c}%'
      }
    },
    {
      name: '框',
      type: 'bar',
      data: [100, 100, 100, 100, 100],
      yAxisIndex:1,
      barCategoryGap:50,
      barWidth:15,
      itemStyle:{
        color:'none',
        borderColor:'#00c1de',
        borderRadius:20
      }
    }
  ]
};
mychart.setOption(option)
window.addEventListener('resize',()=>{
  mychart.resize()
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