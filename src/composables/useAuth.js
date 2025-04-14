import { ref, computed, watchEffect } from 'vue'
import { useRouter } from 'vue-router'
import { ROUTES } from '@/router/paths.js'


const user = ref(null)
const token = ref('')
const isReady = ref(false)

function initAuth() {
  try {
    const storedUser = localStorage.getItem('user')
    const storedToken = localStorage.getItem('token')

    if (storedUser && storedToken) {
      user.value = JSON.parse(storedUser)
      token.value = storedToken
    }
  } catch (e) {
    console.warn('User data corrupt or not JSON:', e)
  } finally {
    isReady.value = true
  }
}

initAuth()

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
    isReady,
    login,
    logout,
  }
}
export { isReady }
