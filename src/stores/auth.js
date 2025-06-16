// src/stores/auth.js
import { defineStore } from "pinia";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    idToken: null,
    accessToken: null,
    expiresIn: null,
    tokenType: null,
    username: null,
  }),
  actions: {
    setTokens(tokens) {
      this.idToken = tokens.id_token;
      this.accessToken = tokens.access_token;
      this.expiresIn = tokens.expires_in;
      this.tokenType = tokens.token_type;

      // IDトークンからユーザー情報をデコード
      const payload = this.decodeJwt(tokens.id_token);
      this.username = payload["cognito:username"] || "ユーザー";
    },
    clearTokens() {
      this.idToken = null;
      this.accessToken = null;
      this.expiresIn = null;
      this.tokenType = null;
      this.username = null;
    },
    decodeJwt(token) {
      try {
        const base64Payload = token.split(".")[1];
        const jsonPayload = decodeURIComponent(
          atob(base64Payload)
            .split("")
            .map((c) => "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2))
            .join("")
        );
        return JSON.parse(jsonPayload);
      } catch (e) {
        console.warn("JWTデコード失敗:", e);
        return {};
      }
    },
  },
});
