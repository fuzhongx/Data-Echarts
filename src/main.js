import { createApp } from 'vue'
import App from './App.vue'
import fleible from '../node_modules/amfe-flexible/index.js'

const app=createApp(App)
app.use(fleible)
app.mount('#app')
