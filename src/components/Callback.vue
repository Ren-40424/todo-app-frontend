<!-- src/views/Callback.vue -->
<template>
  <div>
    <p>ログイン処理中...</p>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '@/stores/auth'
import { parseHashFromUrl } from '@/utils/parseHash'

const authStore = useAuthStore()
const router = useRouter()

onMounted(() => {
  const tokens = parseHashFromUrl()
  if (tokens.idToken) {
    authStore.setTokens(tokens)
    router.push('/')
  } else {
    console.error('トークンの取得に失敗しました')
  }
})
</script>
