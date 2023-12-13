import { createApp } from 'vue'
import App from './App.vue'
// import router from './router'
import store from './store'
import './assets/style.css';

createApp(App).use(store).mount('#app')
