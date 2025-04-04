
/**
 * router/index.ts
 *
 * Automatic routes for `./src/pages/*.vue`
 */

// Composables
// router/index.js

// router/index.js

import { createRouter, createWebHistory } from 'vue-router/auto'
import { routes } from 'vue-router/auto-routes'
import { ROUTES } from './paths.js'


routes.unshift({
  path: '/',
  redirect: ROUTES.LOGIN,
})

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

const publicPages = [ROUTES.LOGIN, ROUTES.REGISTER, ROUTES.FORGOT_PASSWORD]

router.beforeEach((to, from, next) => {
  const isAuthenticated = !!localStorage.getItem('token')
  const isPublic = publicPages.includes(to.path)

  console.log('[ROUTER GUARD]', { to: to.path, isAuthenticated })

  if (!isAuthenticated && !isPublic) return next(ROUTES.LOGIN)
  if (isAuthenticated && to.path === ROUTES.LOGIN) return next(ROUTES.HOME)

  next()
})

router.onError((err, to) => {
  if (err?.message?.includes?.('Failed to fetch dynamically imported module')) {
    if (!localStorage.getItem('vuetify:dynamic-reload')) {
      console.log('Reloading page to fix dynamic import error')
      localStorage.setItem('vuetify:dynamic-reload', 'true')
      location.assign(to.fullPath)
    } else {
      console.error('Dynamic import error, reloading page did not fix it', err)
    }
  } else {
    console.error(err)
  }
})

router.isReady().then(() => {
  localStorage.removeItem('vuetify:dynamic-reload')
})

export default router
