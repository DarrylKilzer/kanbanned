import { createRouter, createWebHashHistory } from 'vue-router'
import { authGuard } from '@bcwdev/auth0provider-client'

function loadPage(page) {
  return () => import(`./pages/${page}.vue`)
}

const routes = [
  {
    path: '/',
    name: 'Home',
    component: loadPage('HomePage')
  },
  {
    path: '/about',
    name: 'About',
    component: loadPage('AboutPage'),
    beforeEnter: (to, from, next) => {

    }
  },
  {
    path: '/profile',
    name: 'Profile',
    component: loadPage('ProfilePage'),
    beforeEnter: authGuard
  }
]

const router = createRouter({
  linkActiveClass: 'router-link-active',
  linkExactActiveClass: 'router-link-exact-active',
  history: createWebHashHistory(),
  routes
})

export default router

router.beforeEach((to, from, next) => {
  // if (from.name === 'Home') {
  //   const leave = window.confirm('Are you sure you want to leave this page?')
  //   if (!leave) {
  //     next(false)
  //   } else {
  //     next()
  //   }
  // } else {
  //   next()
  // }
  let leave = false
  switch (from.name) {
    case 'Home':
      leave = window.confirm('Are you sure you want to leave this page?')
      if (!leave) {
        next(false)
      } else {
        next()
      }
      break
    default:
      next()
  }
})
