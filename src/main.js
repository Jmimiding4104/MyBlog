import './assets/style.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import "bootstrap";
 

import App from './App.vue'
import router from './router'

import Swiper from 'swiper';

const app = createApp(App)

router.afterEach((to, from, next) => {
	window.scrollTo(0, 0);
});

app.use(createPinia())
app.use(router)

app.mount('#app')