import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import './index.css'
import router from './router'
import 'animate.css';


// import three from '../public/js/hover-effect/three.min.js';
// import tweenmax from '../public/js/hover-effect/TweenMax.min.js';
// import hes from '../public/js/hover-effect/hover-effect.umd.js';


const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')

console.log(router)

