import { createApp } from 'vue'
import App from './App.vue'
import { initRouter } from './router'
import store from './store'
import bootstrap from '@/bootstrap'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import zhCn from 'element-plus/es/locale/lang/zh-cn'



import "./assets/css/card_select.css"

import { VueClipboard } from '@soerenmartius/vue3-clipboard'


const router = initRouter()

const app = createApp(App,{appName:"辉耀发卡"})


app.config.globalProperties.$_appName = "辉耀发卡"
app.config.globalProperties.$_apiUrl = ""

app.use(ElementPlus, {
    locale: zhCn,
})

app.use(store).use(VueClipboard).use(router);
bootstrap({router, store, message: app.config.globalProperties.$message})
app.mount('#app');
