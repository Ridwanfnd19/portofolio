import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'


import App from './App.vue'
import router from './router'

import './assets/base.css' 

library.add(fas, far)

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.component('fa-icon', FontAwesomeIcon)
app.mount('#app')
