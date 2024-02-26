import './assets/scss/main.scss';
import './assets/css/all.min.css';
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router/router.js'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.mount('#app')
