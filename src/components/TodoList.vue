<template>
  <div>
    <h1>Todo List</h1>
    <ul>
      <li v-for="todo in todos" :key="todo.id">
        {{ todo.title }} - {{ todo.completed ? '✔️' : '❌' }}
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'

const todos = ref([])

onMounted(async () => {
  try {
    const res = await axios.get('http://localhost:3000/api/todos')
    todos.value = res.data
  } catch (error) {
    console.error('API接続エラー:', error)
  }
})
</script>
