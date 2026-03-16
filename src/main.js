import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import Home from './views/Home.vue'
import V1 from './views/V1.vue'
import V2 from './views/V2.vue'
import V3 from './views/V3.vue'
import V4 from './views/V4.vue'
import V5 from './views/V5.vue'
import V6 from './views/V6.vue'
import V7 from './views/V7.vue'
import V8 from './views/V8.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/v1', component: V1 },
  { path: '/v2', component: V2 },
  { path: '/v3', component: V3 },
  { path: '/v4', component: V4 },
  { path: '/v5', component: V5 },
  { path: '/v6', component: V6 },
  { path: '/v7', component: V7 },
  { path: '/v8', component: V8 }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

const app = createApp(App)
app.use(router)
app.mount('#app')