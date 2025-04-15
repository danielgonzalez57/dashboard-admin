const MainRoutes =   {
    path: '/home',
    meta: {
      requiresAuth: true
    },
    component: () => import('../../pages/dashboard/index.vue'),
    children: [
      // VIEWS
      {
        path: '/dashboard',
        name: 'Dashboard',
        component: () => import('@/views/HomeView.vue')
      }
      
    ]
  }
  
  export default MainRoutes;