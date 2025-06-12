// src/stores/auth.js
import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', {
    state: () => ({
        idToken: null,
        accessToken: null,
        expiresIn: null,
        tokenType: null,
    }),
    actions: {
        setTokens({ idToken, accessToken, expiresIn, tokenType }) {
            this.idToken = idToken
            this.accessToken = accessToken
            this.expiresIn = expiresIn
            this.tokenType = tokenType
        },
        clearTokens() {
            this.idToken = null
            this.accessToken = null
            this.expiresIn = null
            this.tokenType = null
        }
    }
})
