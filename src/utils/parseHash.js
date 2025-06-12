// src/utils/parseHash.js

export function parseHashFromUrl() {
    const hash = window.location.hash.substring(1) // 先頭の "#" を除外
    const params = new URLSearchParams(hash)

    return {
        idToken: params.get('id_token'),
        accessToken: params.get('access_token'),
        expiresIn: params.get('expires_in'),
        tokenType: params.get('token_type'),
    }
}
