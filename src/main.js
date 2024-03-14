import './assets/style.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import "bootstrap";
import axios from 'axios'; 
import VueAxios from 'vue-axios'

import App from './App.vue'
import router from './router'

import Swiper from 'swiper';

const app = createApp(App)

router.afterEach((to, from, next) => {
	window.scrollTo(0, 0);
});

app.use(createPinia())
app.use(router)
app.use(VueAxios, axios)

app.mount('#app')