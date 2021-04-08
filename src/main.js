import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import installElementPlus from './plugins/element'
import "./assets/css/card_select.css"

import { VueClipboard } from '@soerenmartius/vue3-clipboard'




const app = createApp(App,{appName:"辉耀发卡"})

installElementPlus(app)
app.config.globalProperties.$_appName = "辉耀发卡"
app.config.globalProperties.$_apiUrl = ""
app.use(store).use(VueClipboard).use(router).mount('#app')