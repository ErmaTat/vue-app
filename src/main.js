import { createApp } from 'vue'
import './assets/css/bootstrap.min.css';
import './assets/css/icons.min.css'
import './assets/css/app.min.css';
import router from './router';

import App from './App.vue'

const app = createApp(App);
app.use(router);
app.mount('#app');

