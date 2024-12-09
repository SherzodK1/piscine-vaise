
/**
 * router/index.ts
 *
 * Automatic routes for `./src/pages/*.vue`
 */

// Composables
import { createRouter, createWebHistory } from 'vue-router/auto';
import { routes as autoRoutes } from 'vue-router/auto-routes';

// Importar manualmente las vistas si no usas rutas automáticas
import PageProfil from '@/pages/pageProfil.vue';
import Reservation from '@/pages/reservationSalle.vue';

// Definir las rutas manualmente
const routes = [
  ...autoRoutes, // Incluye rutas automáticas si las estás utilizando
  {
    path: '/pageProfil',
    name: 'PageProfil',
    component: PageProfil,
    meta: { requiresAuth: true }, // Requiere autenticación
  },
  {
    path: '/reservationSalle',
    name: 'Reservation',
    component: Reservation,
    meta: { requiresAuth: true }, // También requiere autenticación
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})


// Guard de navegación para verificar autenticación
router.beforeEach((to, from, next) => {
  const isAuthenticated = !!localStorage.getItem('jwt'); // Verificar si hay un token JWT almacenado

  if (to.meta.requiresAuth && !isAuthenticated) {
    // Redirigir al login y pasar el destino deseado como parámetro (para redirección posterior)
    next({ name: 'Login', query: { redirect: to.fullPath } });
  } else {
    next(); // Continuar la navegación
  }
});

// Manejo de errores por módulos dinámicos
router.onError((err, to) => {
  if (err?.message?.includes?.('Failed to fetch dynamically imported module')) {
    if (!localStorage.getItem('vuetify:dynamic-reload')) {
      console.log('Reloading page to fix dynamic import error');
      localStorage.setItem('vuetify:dynamic-reload', 'true');
      location.assign(to.fullPath);
    } else {
      console.error('Dynamic import error, reloading page did not fix it', err);
    }
  } else {
    console.error(err);
  }
});

// Una vez que el enrutador esté listo, limpiar las variables temporales
router.isReady().then(() => {
  localStorage.removeItem('vuetify:dynamic-reload');
});
export default router
