<template>
  <div class="barbox">
    <h2>折线图-播放量</h2>
    <div ref="chartRef" class="barshow"></div>
  </div>
</template>
  
  <script setup>
import * as echarts from "echarts";
import { onMounted, ref } from "vue";

const chartRef = ref(null);
onMounted(()=>{
const myChart=echarts.init(chartRef.value)
const option = {
  // color: ['#80FFA5', '#00DDFF'],
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'cross',
      label: {
        backgroundColor: '#6a7985'
      }
    }
  },
  legend: {
    top:'0%',
    // right:'10%',
    textStyle:{
      color:'rgba(255,255,255,.5)',
      fontSize:'12'
    }
    // data: ['Line 1', 'Line 2', 'Line 3', 'Line 4', 'Line 5']
  },
  toolbox: {
    feature: {
      saveAsImage: {}
    }
  },
  grid: {
    left: '10',
    top:'30',
    right: '10',
    bottom: '10',
    containLabel: true
  },
  xAxis: [
    {
      type: 'category',
      axisLabel:{
         textStyle:{
        color:'rgba(255,255,255,.6)',
        fontSize:'12'
      }
      },
      axisLine:{
        lineStyle:{
          color:'rgba(255,255,255,.2)'
        }
      },
      boundaryGap: false,
      data:  [ "01","02","03","04","05","06","07","08","09",
               "10","11","12","13", "14","15","16","17","18",
               "19","20","21","22","23","24","25","26","26","28","29","30"]
    }
  ],
  yAxis: [
    {
      type: 'value',
      axisTick:{
        show:false,
      },
      axisLine: {
          lineStyle: {
            color: "rgba(255,255,255,.1)"
          }
        },
        axisLabel: {
          textStyle: {
            color: "rgba(255,255,255,.6)",
            fontSize: 12
          }
        },
        // 修改分割线的颜色
        splitLine: {
          lineStyle: {
            color: "rgba(255,255,255,.1)"
          }
        }
      
    }
  ],
  series: [
    {
      name: '转发量',
      type: 'line',
      // stack: 'Total',
      smooth: true,
      lineStyle: {
         color: "#00d887",
         width: 2
      },
      //设置拐点，小圆点
      symbol:'circle',
      symbolSize:5,
      itemStyle:{
          color: "#00d887",
          borderColor: "rgba(221, 220, 107, .1)",
          borderWidth: 12
      },
      // 开始不显示拐点， 鼠标经过显示
      showSymbol: false,
      areaStyle: {
        // opacity: 0.8,
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
         {
                  offset: 0,
                  color: "rgba(0, 216, 135, 0.4)"
                },
                {
                  offset: 0.8,
                  color: "rgba(0, 216, 135, 0.1)"
                }
        ],
        false
        ),
        shadowColor: "rgba(0, 0, 0, 0.1)"
      },
      emphasis: {
        // focus: 'series'
      },
      data:[ 50, 30, 60, 10,50, 30, 60,10,20, 40, 60, 40,20, 40,30, 
      40, 30,20,20, 40, 50, 70, 30, 40,30, 20, 20,69,50, 20]
    },
    {
      name: '播放量',
      type: 'line',
      // stack: 'Total',
      smooth: true,
      lineStyle: {
        width: 2,
        color:'#0184d5'
      },
      //设置拐点，小圆点
      symbol:'circle',
      symbolSize:8,
      itemStyle:{
          color: "#0184d5",
          borderColor: "rgba(221, 220, 107, .1)",
          borderWidth: 12
      },
       // 开始不显示拐点， 鼠标经过显示
      showSymbol: false,
      areaStyle: {
        // opacity: 0.8,
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          {
            offset: 0,
            color: 'rgba(1, 132, 213, 0.4)'
          },
          {
            offset: 0.8,
            color: 'rgba(1, 132, 213, 0.1)'
          }
        ],
        false
        ),
        shadowColor: "rgba(0, 0, 0, 0.1)"
      },
      emphasis: {
        // focus: 'series'
      },
      data:[ 30, 40, 30, 40,30, 40, 30,60,20, 40, 30, 40, 30, 40,
      30, 40, 30,60,20, 40, 30, 40, 30, 40,30, 40, 20,60,50, 40],
    },
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