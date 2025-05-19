<template>
  <form @submit.prevent="submitTodo">
    <input v-model="title" placeholder="新しいTodoを入力" />
    <button type="submit">追加</button>
  </form>
</template>

<script setup>
import { ref } from 'vue'
import axios from 'axios'

const title = ref('')

const submitTodo = async () => {
  if (!title.value.trim()) return
  try {
    await axios.post('http://localhost:3000/api/todos', {
      todo: {
        title: title.value,
        completed: false
      }
    })
    title.value = ''
    window.location.reload() // 簡易的に再読み込みで反映
  } catch (err) {
    console.error('作成失敗:', err)
  }
}
</script>
