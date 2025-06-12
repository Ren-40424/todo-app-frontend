// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import TodoList from '@/components/TodoList.vue'
import Callback from '@/components/Callback.vue'

const routes = [
    { path: '/', component: TodoList },
    { path: '/callback', component: Callback }
]

export const router = createRouter({
    history: createWebHistory(),
    routes
})
