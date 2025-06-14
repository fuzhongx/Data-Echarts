<template>
    <div class="box">
        <div class="header">
            <h1>数据可视化-ECharts</h1>
            <div class="showTime"></div>
        </div>
    </div>
</template>

<script setup>
import { reactive } from 'vue'

var t = null;
t = setTimeout(time, 1000);//開始运行
function time() {
    clearTimeout(t);//清除定时器
    const dt = new Date();
    var y = dt.getFullYear();
    var mt = dt.getMonth() + 1;
    var day = dt.getDate();
    var h = dt.getHours();//获取时
    var m = dt.getMinutes();//获取分
    var s = dt.getSeconds();//获取秒
    document.querySelector(".showTime").innerHTML = '当前时间：' + y + "年" + mt + "月" + day + "-" + h + "时" + m + "分" + s + "秒";
    t = setTimeout(time, 1000); //设定定时器，循环运行     
} 
</script>

<style lang="scss" scoped>
// @import url('@/assets/font/DS-DIGIT.TTF');
.box {
    height: 100vh;
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
            color: rgba(255, 255, 255, 0.7);
            font-size: .475rem;
            line-height: 1rem;
            text-align: center;
        }

        .showTime {
            position: absolute;
            right: .375rem;
            top: 0;
            line-height: .9375rem;
            font-size: 20px;
        }
    }
}
</style>