// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import TodoList from '@/components/TodoList.vue'
import Callback from '@/components/Callback.vue'
import Healthcheck from '../components/Healthcheck.vue'

const routes = [
    { path: '/', component: TodoList },
    { path: '/callback', component: Callback },
    { path: '/healthcheck', component: Healthcheck },
]

export const router = createRouter({
    history: createWebHistory(),
    routes
})
