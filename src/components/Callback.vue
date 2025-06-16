<template>
  <div>
    <p>ログイン処理中...</p>
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import { useRouter } from "vue-router";
import { useAuthStore } from "@/stores/auth";

const authStore = useAuthStore();
const router = useRouter();

onMounted(async () => {
  const code = new URLSearchParams(window.location.search).get("code");

  if (!code) {
    console.error("認可コードが見つかりません");
    return;
  }

  try {
    const res = await fetch(
      `${import.meta.env.VITE_COGNITO_DOMAIN}/oauth2/token`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({
          grant_type: "authorization_code",
          code,
          client_id: import.meta.env.VITE_COGNITO_CLIENT_ID,
          redirect_uri: import.meta.env.VITE_COGNITO_REDIRECT_URI,
        }),
      }
    );

    const tokens = await res.json();

    if (tokens.id_token) {
      authStore.setTokens(tokens);
      router.push("/");
    } else {
      console.error("トークンの取得に失敗しました", tokens);
    }
  } catch (err) {
    console.error("トークン取得中にエラーが発生しました", err);
  }
});
</script>
