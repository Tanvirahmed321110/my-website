// router.js
import { createRouter, createWebHistory } from 'vue-router'
import Home from '../src/components/App-Home.vue'
import Project from './components/App-Projects.vue'
import About from './components/App-About.vue'
import NotFound from './components/App-NotFound.vue'


const routes = [
  { path: '/', component: Home },
  { path: '/projects', component: Project },
  { path: '/about', component:About},
  { path: '/:catchAll(.*)', component: NotFound },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
