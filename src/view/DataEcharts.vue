<template>
  <div class="box">
    <div class="header">
      <h1>可视化展板-ECharts</h1>
      <div class="showTime">{{ showTime }}</div>
    </div>
    <div class="Echarts">
      <!-- 左侧面板 -->
      <div class="column">
        <!-- 柱状图-就业行业 -->
        <div class="bar">
          <Bar></Bar>
          <div class="panel-footer"></div>
        </div>

        <!-- 折线图-人员变化 -->
        <div class="bar">
          <PeoEchart></PeoEchart>
          <div class="panel-footer"></div>
        </div>

        <!-- 饼形图-年龄分布 -->
        <div class="bar">
          <Age></Age>
          <div class="panel-footer"></div>
        </div>
      </div>

      <!-- 地图展示 -->
      <div class="column map">
        <!-- 面板展示数字 -->
        <div class="num">
          <div class="numShow">
            <ul>
              <li class="line">{{ count }}</li>
              <li>{{ getShopTime }}</li>
            </ul>
          </div>
          <div class="numSum">
            <ul>
              <li>前端需求人数</li>
              <li>市场供应人数</li>
            </ul>
          </div>
        </div>

        <!-- 地图展示 -->
        <div class="mapShow">
          <div class="chart">
            <MapEchart></MapEchart>
          </div>
          <div class="map1"></div>
          <div class="map2"></div>
          <div class="map3"></div>
        </div>
      </div>

      <!-- 右侧Echarts展示 -->
      <div class="column">
        <!-- 柱状图-技能掌握 -->
        <div class="bar">
          <Skill></Skill>
          <div class="panel-footer"></div>
        </div>

        <!-- 折线图-播放量 -->
        <div class="bar">
          <Play></Play>
          <div class="panel-footer"></div>
        </div>

        <!-- 地区分布 -->
        <div class="bar">
          <Location></Location>
          <div class="panel-footer"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Bar from "@/components/BarEchart.vue";
import PeoEchart from "@/components/PopleEchart.vue";
import Skill from "@/components/SkiEchart.vue";
import Age from "@/components/AgeEchart.vue";
import Play from "@/components/PlayEchart.vue";
import Location from "@/components/LocaEchart.vue";
import MapEchart from "@/components/MapEchart.vue";

import { onBeforeUnmount, onMounted, ref } from "vue";

let showTime=ref()

let numTime = null;
let numRadom = null;

let randomNUM = ref(0);//前端时间
let getRandomTime = ref(0); //市场时间

const count = ref(JSON.parse(localStorage.getItem("VueNum"))?JSON.parse(localStorage.getItem("VueNum")):0 ); //存储前段人数
const getShopTime = ref(JSON.parse(localStorage.getItem("ShopTime"))?JSON.parse(localStorage.getItem("ShopTime")):0); //存储市场人数

//当日时间
var t = null;
t = setTimeout(time, 1000); //開始运行

onMounted(() => {
  //前段需求人数
  numTimeHandel();
  randomTime();
  getRandom();
  shopTimeHandel();
  time();
});

//=当天日期时间
function time() {
  clearTimeout(t); //清除定时器
  const dt = new Date();
  var y = dt.getFullYear();
  var mt = dt.getMonth() + 1;
  var day = dt.getDate();
  var h = dt.getHours(); //获取时
  var m = dt.getMinutes(); //获取分
  var s = dt.getSeconds(); //获取秒
  showTime.value =
    "当前时间：" +
    y +
    "年" +
    mt +
    "月" +
    day +
    "-" +
    h +
    "时" +
    m +
    "分" +
    s +
    "秒";
  t = setTimeout(time, 1000); //设定定时器，循环运行
}
// 市场需求时间
const getRandom = () => {
  setInterval(() => {
    getRandomTime.value = Math.floor(Math.random() * 90) + 10;
  }, 1000);
};

const shopTimeHandel = () => {
  setInterval(() => {
    if (getShopTime.value >= 900000) {
      getShopTime.value = 0;
    } else {
      getShopTime.value += getRandomTime.value;
    }
    localStorage.setItem("ShopTime", getShopTime.value);
  }, 1000);
};

// 前端时间
const randomTime = () => {
  numRadom = setInterval(() => {
    randomNUM.value = Math.floor(Math.random() * 10);
  }, 1000);
};

const numTimeHandel = () => {
  numTime = setInterval(() => {
    if (count.value >= 900000) {
      count.value = 0;
    } else {
      count.value += randomNUM.value;
    }
    localStorage.setItem("VueNum", count.value);
  }, 1000);
};

onBeforeUnmount(() => {
  clearInterval(numTime);
  clearInterval(numRadom);
});
</script>

<style lang="scss" scoped>
.box {
  background-image: url("@/assets/image/bg.jpg");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  line-height: 1.15rem;

  .header {
    position: relative;
    height: 1.25rem;
    color: #fff;
    background-image: url("@/assets/image/head_bg.png");
    background-repeat: no-repeat;
    background-size: 100% 100%;

    h1 {
      color: #fff;
      font-size: 0.475rem;
      line-height: 1rem;
      text-align: center;
    }

    .showTime {
      position: absolute;
      top: 0;
      right: 0.375rem;
      line-height: 0.9375rem;
      font-size: 0.25rem;
      color: rgba(255, 255, 255, 0.7);
    }
  }
  .Echarts {
    padding: 0.125rem 0.125rem 0;
    display: flex;
    .column {
      flex: 3;
      .bar {
        position: relative;
        height: 3.875rem;
        border: 1px solid rgba(25, 186, 139, 0.17);
        background-image: url("@/assets/image/line(1).png") no-repeat top center;
        background-size: 100% 100%;
        padding: 0 0.1875rem 0.5rem;
        margin-bottom: 0.1875rem;
        &::before {
          position: absolute;
          left: 0;
          top: 0;
          content: "";
          width: 10px;
          height: 10px;
          border-top: 2px solid #02a6b5;
          border-left: 2px solid #02a6b5;
        }
        &::after {
          position: absolute;
          top: 0;
          right: 0;
          content: "";
          width: 10px;
          height: 10px;
          border-top: 2px solid #02a6b5;
          border-right: 2px solid #02a6b5;
        }
        .panel-footer {
          width: 100%;
          position: absolute;
          bottom: 0;
          left: 0;
          &::before {
            position: absolute;
            bottom: 0;
            left: 0;
            width: 0.125rem;
            height: 0.125rem;
            content: "";
            border-bottom: 2px solid #02a6b5;
            border-left: 2px solid #02a6b5;
          }
          &::after {
            position: absolute;
            bottom: 0;
            right: 0;
            width: 0.125rem;
            height: 0.125rem;
            content: "";
            border-bottom: 2px solid #02a6b5;
            border-right: 2px solid #02a6b5;
          }
        }
      }
      .num {
        background-color: rgba(101, 132, 226, 0.1);
        padding: 0.1875rem;
        .numShow {
          position: relative;
          border: 1px solid rgba(25, 186, 139, 0.17);
          &::before {
            position: absolute;
            left: 0;
            top: 0;
            width: 0.375rem;
            height: 0.125rem;
            content: "";
            border-top: 2px solid #02a6b5;
            border-left: 2px solid #02a6b5;
          }
          &::after {
            position: absolute;
            right: 0;
            bottom: 0;
            width: 0.375rem;
            height: 0.125rem;
            content: "";
            border-bottom: 2px solid #02a6b5;
            border-right: 2px solid #02a6b5;
          }
          ul {
            display: flex;
            width: 100%;
            li {
              position: relative;
              width: 100%;
              flex: 1;
              height: 1rem;
              font-size: 0.875rem;
              color: #ffeb7b;
              text-align: center;
              font-family: electronicFont;
            }
            .line {
              &::after {
                position: absolute;
                width: 0.0125rem;
                content: "";
                height: 50%;
                right: 0;
                top: 25%;
                background-color: rgba(255, 255, 255, 0.2);
              }
            }
          }
        }
      }
      .numSum {
        ul {
          display: flex;
          li {
            flex: 1;
            height: 0.5rem;
            line-height: 0.5rem;
            text-align: center;
            font-size: 0.225rem;
            color: rgba(255, 255, 255, 0.7);
            padding-top: 0.125rem;
          }
        }
      }

      // map地图
      .mapShow {
        position: relative;
        height: 10.125rem;
        .chart {
          position: absolute;
          top: 0;
          left: 0;
          height: 10.125rem;
          width: 100%;
          z-index: 999;
        }

        .map1,
        .map2,
        .map3 {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 6.475rem;
          height: 6.475rem;
          background-image: url("@/assets/image/map.png");
          background-repeat: no-repeat;
          background-size: 100% 100%;
          opacity: 0.3;
        }
        .map2 {
          width: 8.0375rem;
          height: 8.0375rem;
          background-image: url("@/assets/image/lbx.png");
          background-repeat: no-repeat;
          background-size: 100% 100%;
          animation: rotate 15s linear infinite;
          z-index: 1;
        }
        .map3 {
          width: 7.075rem;
          height: 7.075rem;
          background-image: url("@/assets/image/jt.png");
          animation: rotate1 10s infinite linear;
        }

        @keyframes rotate {
          from {
            transform: translate(-50%, -50%) rotate(0deg);
          }
          to {
            transform: translate(-50%, -50%) rotate(360deg);
          }
        }
        @keyframes rotate1 {
          from {
            transform: translate(-50%, -50%) rotate(0deg);
          }
          to {
            transform: translate(-50%, -50%) rotate(-360deg);
          }
        }
      }
    }
    .column:nth-child(2) {
      flex: 5;
      margin: 0 0.125rem 0.1875rem;
    }
  }
}
</style>