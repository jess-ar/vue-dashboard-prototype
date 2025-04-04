import { ref, computed, watchEffect } from 'vue'
import { useRouter } from 'vue-router'
import { ROUTES } from '@/router/paths.js'

let parsedUser = null
try {
  parsedUser = JSON.parse(localStorage.getItem('user'))
} catch (e) {
  console.warn('User data corrupt or not JSON:', e)
}
const user = ref(parsedUser)

const token = ref(localStorage.getItem('token'))

watchEffect(() => {
  token.value = localStorage.getItem('token')
})

export const isAuthenticated = computed(() => !!token.value)

export function useAuth() {
  const router = useRouter()

  const login = (userData) => {
    user.value = userData
    token.value = 'fake_token_123'
    localStorage.setItem('user', JSON.stringify(userData))
    localStorage.setItem('token', token.value)
    router.push(ROUTES.HOME)
  }

  const logout = () => {
    user.value = null
    token.value = ''
    localStorage.removeItem('user')
    localStorage.removeItem('token')
    router.push(ROUTES.LOGIN)
  }

  return {
    user,
    token,
    isAuthenticated,
    login,
    logout,
  }
}
