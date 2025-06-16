<template>
  <div ref="mapRef" class="map">12345</div>
</template>

<script setup>
import * as echarts from 'echarts';
import { ref, onMounted } from "vue";

const mapRef = ref(null);

onMounted(() => {
  const myChart = echarts.init(mapRef.value);
  // 假设你已经下载了某个地区的 GeoJSON 数据并保存为 custom_map.json
echarts.registerMap('custom_map', echarts.getMap('custom_map')); // 注意这里的'custom_map'要与注册时使用的名称一致
  const option = {
    title: {
      text: "中国地图示例",
    },
    tooltip: {},
    series: [
      {
        name: "中国",
        type: "map",
        mapType: "custom_map",
        roam: true, // 允许缩放和平移
        label: {
          show: true,
        },
        data: [
          { name: "北京", value: 100 },
          { name: "上海", value: 200 },
          // 其他地区数据...
        ],
      },
    ],
  };
  myChart&myChart.setOption(option);
});
</script>

<style lang="scss" scoped>
.map{
    width: 100%;
    height: 100%;
    // z-index: 99;
}
</style>