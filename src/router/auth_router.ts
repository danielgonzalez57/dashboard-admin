const AuthRoutes = {
    path: '/auth',
    component: () => import('../../pages/login/index.vue'),
    meta: {
      requiresAuth: false
    },
    children: [
      {
        name: 'Login',
        path: '/login',
        component: () => import('@/components/LoginForm.vue')
      }
      // {
      //   name: 'Error 404',
      //   path: '/pages/error',
      //   component: () => import('@/views/404/ErrorApp404.vue')
      // }
    ]
  };
  
  export default AuthRoutes;