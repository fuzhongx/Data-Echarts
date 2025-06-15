import { createApp } from 'vue'
import App from './App.vue'
import fleible from '@/until/index'
import * as echarts from 'echarts';

const app=createApp(App)
app.config.globalProperties.$echarts = echarts
app.use(fleible)
app.use(echarts)
app.mount('#app')
