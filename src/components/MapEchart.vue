<template>
  <div ref="mapRef" class="map"></div>
</template>

<script setup>
import * as echarts from "echarts";
import { mapData } from "@/until/China";
import { getData } from "@/api/api";

import { ref, onMounted } from "vue";
import china  from '@/until/geoJson.json';

// var DataUrl= '@/until/geoJson.json'
const mapRef = ref(null);
const chart=ref(null) 
     var mapData=[
        { name: '北京', value: 100 },
        { name: '上海', value: 80 },
        { name: '广东', value: 95 },
        // 其他省份数据...
      ]
      var lineData=[
        { fromName: '北京', toName: '上海', value: 50 },
        { fromName: '北京', toName: '广东', value: 30 },
        { fromName: '上海', toName: '四川', value: 20 }
      ]
onMounted(() => {
<<<<<<< HEAD
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
=======

   // 注册地图
   echarts.registerMap('china', china)
   const line=lineData.map(item=>{
    return {
      coords:[
      getCoordByName(item.fromName),
      getCoordByName(item.fromName)

      ],
      value: item.value
    }
   })
   const myChart = echarts.init(mapRef.value);
      const option = {
        // color:['#02a6b5'],
        title: {
          text: '中国地图',
          left: 'center',
          top:'3%',
          textStyle: {
            color: '#fff',
            fontSize: 18
          }
        },
        tooltip: {
          trigger: 'item',
          formatter: params => {
            console.log(params,'数字');
            if (params.seriesType === 'map') {
              return `${params.name}<br/>数值: ${params.value || 0}`
            } else if (params.seriesType === 'lines') {
              return `${params.data.fromName} → ${params.data.toName}<br/>流量: ${params.data.value}`
            }
          }
        },
        visualMap: {
          min: 0,
          max: 100,
          text: ['高', '低'],
          textStyle:{
            color:'#fff'
          },
          realtime: false,
          calculable: true,
          inRange: {
            color: ['#e0f3f8', '#abd9e9', '#74add1', '#4575b4', '#313695']
          }
        },
        geo: {
          map: 'china',
          roam: true,
          label: {
            show: true,
            fontSize: 10
          },
          emphasis: {
            label: {
              color: '#fff',
              fontSize: 12
            },
            itemStyle: {
              areaColor: '#389BB7'
            }
          },
          itemStyle: {
            areaColor: '#e0f3f8',
            borderColor: '#389BB7',
            borderWidth: 0.5
          }
        },
        series: [
          {
            name: '数据',
            type: 'map',
            map: 'china',
            geoIndex: 0,
            data:lineData,
            emphasis: {
              label: {
                show: true
              }
            }
          }
        ]}
        myChart.setOption(option)

>>>>>>> 50e47cf25a8b5e8ceb0c495bfa14ad1b7a10f062
});
const getCoordByName=(name) =>{
      // 这里应该有一个名称到坐标的映射表
      const coordMap = {
        '北京': [116.46, 39.92],
        '上海': [121.48, 31.22],
        '广东': [113.23, 23.16],
        '四川': [104.06, 30.67],
        '湖北': [114.31, 30.52]
      }
      return coordMap[name] || [0, 0]
    }
</script>

<style lang="scss" scoped>
.map {
  width: 100%;
  height: 100%;
  opacity: 0.5;
}
</style>