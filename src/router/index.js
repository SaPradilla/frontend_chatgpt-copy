import { createRouter, createWebHistory } from 'vue-router'
import ChatView from '../views/ChatView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/chat',
      name: 'chat',
      component: ChatView,
      meta: { requiresAuth: true },
    },{
      path:'/register/identifier',
      name:'register',
      component: ()=>  import('../views/RegisterView.vue')
    },
    {
      path:'/register/password',
      name:'register-pwd',
      component: ()=>  import('../views/RegisterPwdView.vue')
    },
    {
      path:'/login/identifier',
      name:'login',
      component: () => import('../views/LoginView.vue'),
    },{
      path:'/login/password',
      name:'login-pwd',
      component: ()=> import('../views/LoginPwdView.vue')
    },
    {
      path:'/',
      name:'home',
      component: () => import('../views/HomeView.vue'), 
    }
  ]
})

// protect routes
router.beforeEach((to,from,next)=>{

  const requiresAuth = to.matched.some(url => url.meta.requiresAuth)
  if(requiresAuth){

    if(localStorage.getItem('token')){
      next()
    }else{
      next('/login')
    }
  }else{
    next()
  }

})

export default router
