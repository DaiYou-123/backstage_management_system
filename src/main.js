
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router/index'

// 全引入
// import ElementPlus from 'element-plus'
// import 'element-plus/dist/index.css'


import 'normalize.css/normalize.css'
import './assets/css/base.css'
// 数据持续化
import piniapluginpersistedstate from 'pinia-plugin-persistedstate'

import Breadcrumb from './components/Breadcrumb/Breadcrumb.vue'
import Skeleton from '@x-ui-vue3/skeleton'
// import * as echarts from 'echarts'; // 全局引用 // 后改为CDN方式的全局引用
// // 导入接口---挂全局---
// import api from './api';
const pinia = createPinia()
pinia.use(piniapluginpersistedstate);

const app = createApp(App)
app.use(Skeleton)
// // provide inject 提供一个值，可以在应用中的所有后代组件中注入使用
// provide('api',api)
// 全局组件的注册
app.component('Breadcrumb', {Breadcrumb })

app.use(pinia)

app.use(router)
 
// 全局引入 但是是CDN分发
// app.use(ElementPlus)

// import locale from "element-plus/es/locale/lang/zh-cn";//需要新加的代码
// app.use(ElementPlus, {locale});//需要改变的地方，加入locale（中文包）
// app.config.globalProperties.$echarts = echarts


app.mount('#app')



// import { createApp } from 'vue'

// import Skeleton from '@x-ui-vue3/skeleton'
// import App from './App.vue'
// const app = createApp(App)
// app.use(Skeleton)
// app.mount('#app')