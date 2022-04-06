import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import { Vue3Mq } from "vue3-mq";
import { loadFonts } from './plugins/webfontloader'

loadFonts()

createApp(App)
  .use(router)
  .use(store)
  .use(Vue3Mq, { preset: 'vuetify'})
  .use(vuetify)
  .mount('#app')
