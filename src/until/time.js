import { reactive } from "vue";
const t =reactive(null)
const time=()=> {
    clearTimeout(t)
        const dt = new Date();
        var y = dt.getFullYear();
        var mt = dt.getMonth() + 1;
        var day = dt.getDate();
        var h = dt.getHours();//获取时
        var m = dt.getMinutes();//获取分
        var s = dt.getSeconds();//获取秒
        document.querySelector(".showTime").innerHTML='当前时间：' + y + "年" + mt + "月" + day + "-" + h + "时" + m + "分" + s + "秒";       
}
setTimeout(time(), 100); //设定定时器，循环运行  
// const times=setInterval(time(), 1000);
export default time()
