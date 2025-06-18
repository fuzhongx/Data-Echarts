<template>
  <div ref="mapRef" class="map"></div>
</template>

<script setup>
import * as echarts from 'echarts';
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
.map{
    width: 100%;
    height: 100%;
    // z-index: 99;
}
</style>