<template>
  <header class="header">
    <a href="/" class="logo">TodoApp</a>
    <div class="auth-button-area">
      <template v-if="isLoggedIn">
        <span class="username">{{ username }}</span>
      </template>
      <template v-else>
        <button class="login-button" @click="login">ログイン</button>
      </template>
    </div>
  </header>
</template>

<script setup>
import { useAuthRedirect } from '@/composables/useAuthRedirect'
import { storeToRefs } from 'pinia'
import { useAuthStore } from '@/stores/auth'
import { computed } from 'vue'

const { login } = useAuthRedirect()
const authStore = useAuthStore()
const { idToken, username } = storeToRefs(authStore)

const isLoggedIn = computed(() => !!idToken.value)
</script>


<style scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 24px;
  background-color: #ffffff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.logo {
  font-size: 1.5rem;
  font-weight: bold;
  color: #333;
  text-decoration: none;
}

.logo:hover {
  text-decoration: underline;
}

.login-button {
  padding: 8px 16px;
  background-color: #2563eb;
  color: #ffffff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.2s ease;
}

.login-button:hover {
  background-color: #1e40af;
}

.username {
  font-size: 1rem;
  font-weight: bold;
  color: #333;
}
</style>
