import { createApp } from 'vue';
import ElementPlus from 'element-plus';
import App from './App.vue';
import router from './router'

const  app = createApp(App)
app.config = {
    "":false
}
app.use(ElementPlus)
app.use(router)
app.mount('#app')
