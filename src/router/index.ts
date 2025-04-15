import { createRouter, createWebHistory } from 'vue-router'
import MainRoutes from './main_router';
import AuthRoutes from './auth_router';
import { useAuthStore } from '@/stores/auth_login';

// Rutas de la app
const routes = [
  AuthRoutes,
  MainRoutes,
  // {
  //   // pagina para rutas desconocidas
  //   path: '/:pathMatch(.*)*',
  //   component: () => import('@/views/404/ErrorApp404.vue')
  // }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

interface User {
  id: number;
  name: string;
}

interface AuthStore {
  user: User | null;
  returnUrl: string | null;
  login(username: string, password: string): void;
  logout(): void;
}


router.beforeEach((to, from, next) => {
  const auth = useAuthStore();
  const publicPages = ['/login']; // Ruta pública (ajusta según tu estructura)
  const authRequired = !publicPages.includes(to.path);

  if (authRequired && !auth.user) {
    auth.returnUrl = to.fullPath;
    next('/login'); // Redirige al login si no está autenticado
  } else {
    next(); // Permite el acceso
  }
});

export default router