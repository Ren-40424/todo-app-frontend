<template>
  <form @submit.prevent="submitTodo">
    <input v-model="title" placeholder="新しいTodoを入力" />
    <button type="submit">追加</button>
  </form>
</template>

<script setup>
import { ref } from "vue";
import api from "@/lib/axios.js";
import { defineEmits } from "vue";

const title = ref("");
const emit = defineEmits();

const submitTodo = async () => {
  if (!title.value.trim()) return;
  try {
    await api.post(`${import.meta.env.VITE_API_BASE_URL}/todos`, {
      todo: {
        title: title.value,
        completed: false,
      },
    });
    emit("todo-created");
    title.value = "";
  } catch (err) {
    console.error("作成失敗:", err);
  }
};
</script>
