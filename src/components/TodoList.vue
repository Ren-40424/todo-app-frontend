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
  const res = await axios.get('http://localhost:3000/api/todos')
  todos.value = res.data
}

const deleteTodo = async (id) => {
  await axios.delete(`http://localhost:3000/api/todos/${id}`)
  fetchTodos()
}

const toggleTodo = async (todo) => {
  await axios.put(`http://localhost:3000/api/todos/${todo.id}`, {
    todo: {
      completed: !todo.completed
    }
  })
  fetchTodos()
}

onMounted(fetchTodos)
</script>
