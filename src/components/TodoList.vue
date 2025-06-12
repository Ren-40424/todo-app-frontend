<template>
  <div>
    <h1>Todo List</h1>
    <ul>
      <li v-for="todo in todos" :key="todo.id">
        <span @click="toggleTodo(todo)" style="cursor: pointer;">
          {{ todo.title }} - {{ todo.completed ? '✔️' : '❌' }}
        </span>
        <button @click="deleteTodo(todo.id)">削除</button>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'

const todos = ref([])

const fetchTodos = async () => {
  const res = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/todos`)
  todos.value = res.data
}

const deleteTodo = async (id) => {
  await axios.delete(`${import.meta.env.VITE_API_BASE_URL}/todos/${id}`)
  fetchTodos()
}

const toggleTodo = async (todo) => {
  await axios.put(`${import.meta.env.VITE_API_BASE_URL}/todos/${todo.id}`, {
    todo: {
      completed: !todo.completed
    }
  })
  fetchTodos()
}

onMounted(fetchTodos)
</script>
