<template>
  <div class="barbox">
    <h2>饼形图-地区分布</h2>
    <div ref="chartRef" class="barshow"></div>
  </div>
</template>
  
  <script setup>
import * as echarts from "echarts";
import { ref, onMounted } from "vue";
const chartRef = ref(null);

onMounted(() => {
  const myChart = echarts.init(chartRef.value);
  const option = {
    color: [
      "#006cff",
      "#60cda0",
      "#ed8884",
      "#ff9f7f",
      "#0096ff",
      "#9fe6b8",
      "#32c5e9",
      "#1d9dff",
    ],
    legend: {
      top: "bottom",
      itemWidth: 20,
      textStyle: {
        color: "rgba(255,255,255,.5)",
      },
      itemStyle: {
        fontSize: 12,
      },
    },
    tooltip: {
      show: true,
    },
    toolbox: {
      show: true,
      feature: {
        mark: { show: true },
        //数据视图
        dataView: { show: true, readOnly: false },
        //刷新数据
        restore: { show: true },
        //下载保存图片
        saveAsImage: { show: true },
      },
    },
    series: [
      {
        name: "面积模式",
        type: "pie",
        radius: ['10%', "70%"],
        center: ["50%", "50%"],
        roseType: "radius",
        label: {
          // color: "#fff",
          fontSize: 10,
        },
        itemStyle: {
          borderRadius: 8,
        },
        labelLine: {
          //连接扇形图线下航
          length: 6,
          //连接文字线长
          length2: 8,
        },
        data: [
          { value: 20, name: "云南" },
          { value: 26, name: "北京" },
          { value: 24, name: "山东" },
          { value: 25, name: "河北" },
          { value: 20, name: "江苏" },
          { value: 25, name: "浙江" },
          { value: 30, name: "四川" },
          { value: 42, name: "湖北" },
        ],
      },
    ],
  };
  myChart.setOption(option);
  window.addEventListener("resize", () => {
    myChart.resize();
  });
});

// onBeforeUnmount(()=>{
//   if(myChart){
//     window.removeEventListener('resize',handleResize)
//     myChart.dispose()
//   }
// })

// function handleResize(){
//   myChart&myChart.resize()
// }
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