// main.ts
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/main.css'
import DataVVue3 from '@kjgl77/datav-vue3'
import '@/assets/icon/iconfont.css';
import * as echarts from 'echarts';
// 确保主题注册后再创建应用
import theme from '@/utils/theme.ts';
echarts.registerTheme('myTheme', theme);
import shanxi from './shanxi.json'
console.log(shanxi)
echarts.registerMap('shanxi', shanxi);
//  const mapExists = echarts.getMap('shanxi');
//   console.log('Shanxi map registered:', !!mapExists);
// console.log(shanxi)
import VChart from 'vue-echarts';

const app = createApp(App)

app.use(router)
app.use(DataVVue3);
app.component('VChart', VChart);


app.mount('#app')