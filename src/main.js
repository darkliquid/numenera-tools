// Import material design lite
import 'material-design-lite/src/material-design-lite.scss'
import 'material-design-lite/material'
import 'material-design-icons-loader'

// Import Vue2 MDL components
import VueMdl from 'vue-mdl'

// App
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

const app = createApp(App)

app.use(router)
app.use(store)
app.use(VueMdl)
app.mount('#app')