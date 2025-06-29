<template>
  <div ref="mapRef" class="map"></div>
</template>

<script setup>
import * as echarts from "echarts";
import { mapData } from "@/until/China";
import { getData } from "@/api/api";

import { ref, onMounted } from "vue";

const mapRef = ref(null);

onMounted(() => {
  getData().then((res)=>{
    console.log(res);
    
  })
  const myCharts = echarts.init(mapRef.value);
  echarts.registerMap("chinaMap", mapData);

  let option = {
    geo: {
      //地理坐标
      type: "map",
      map: "chinaMap",
      roam: true, //可拖动放大
      top: "20%",
      // left: "13%",
      // zoom: 0.8, //放大
      // center:[],//定位到哪个省
      label: {
        show: true,
        // color: "#ff6600",
        // fontSize:16
      },
      itemStyle: {
        // areaColor:'#ff6600'//省份的背景颜色
      },
    },
    series: [
      {//散点图
        type: "scatter",
        coordinateSystem: "geo",
        SymbolSize: 20,
        data: [
          {
            name: "北京市",
            value: [116.4, 39.92],
          },
        ],
      },
      {
        type:'effectScatter',//涟漪效果散点图
        coordinateSystem: "geo",//定位
        data:[
        {
            name: "北京市",
            // value: [116.4, 39.92],
            value: [108.95, 34.26],
          },
        ],
        rippleEffect:{
           Number:3,//波纹数量
           scale:4,
        },
        itemStyle:{
          color:'red'
        }
      }
    ],

    // series: [
    //   {
    //     name: "中国",
    //     type: "map",
    //     map: "chinaMap",
    //     top: "20%",
    //     left: "13%",
    //     // zoom: 0.8, //放大
    //     // 设置地图的默认样式（例如透明度）
    //     itemStyle: {
    //       areaColor: "#ddd", // 设置地图的默认背景颜色为浅灰色
    //     },

    //     data: [
    //       { name: "广东省", value: ['116.405285', '39.904989']}, // 这里可以添加数据，但不直接设置颜色，颜色通过下面的emphasis设置
    //       { name: "北京省", value: 200 },
    //       { name: "海南省", value: 100 },
    //       { name: "广西省", value: 100 },
    //       { name: "福建省", value: 100 },
    //     ],
    //     emphasis: {
    //       // 高亮状态下的样式设置
    //       itemStyle: {
    //         areaColor: "#ff6347", // 高亮时北京的颜色
    //       },
    //     },
    //   },
    // ],
  };
  myCharts.setOption(option);
  window.addEventListener('resize',()=>{
    myCharts.resize()
  })
});
</script>

<style lang="scss" scoped>
.map {
  width: 100%;
  height: 100%;
  opacity: 0.5;
}
</style>