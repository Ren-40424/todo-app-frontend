// src/composables/useAuthRedirect.js
export function useAuthRedirect() {
  const login = () => {
    const domain = import.meta.env.VITE_COGNITO_DOMAIN
    const clientId = import.meta.env.VITE_COGNITO_CLIENT_ID
    const redirectUri = import.meta.env.VITE_COGNITO_REDIRECT_URI
    const responseType = import.meta.env.VITE_COGNITO_RESPONSE_TYPE
    const scope = import.meta.env.VITE_COGNITO_SCOPE

    const loginUrl = `${domain}/login?client_id=${clientId}&response_type=${responseType}&scope=${scope}&redirect_uri=${encodeURIComponent(redirectUri)}`
    window.location.href = loginUrl
  }

  return { login }
}
