import Vue from 'vue';
import Router from 'vue-router';
import Accueil from './frontend/src/pages/acceuil.vue';
import aPropos from './frontend/src/pages/apropos.vue';
import Cours from './frontend/src/pages/cours.vue';
import equipements from './piscine-vaise/frontend/src/pages/equipements.vue';
import evenements from './piscine-vaise/frontend/src/pages/evenements.vue';
import pageProfil from './piscine-vaise/frontend/src/pages/pageProfil.vue';
import reservationSalle from './frontend/src/pages/reservationSalle.vue';






Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Accueil',
      component: Accueil
    },
    {
      path: '/aPropos',
      name: 'aPropos',
      component: aPropos
    },
    {
      path: '/cours',
      name: 'Cours',
      component: Cours
    },
    {
     path: '/',
     name: 'equipements',
     component: equipements
    },
    {
    path: '/evenements',
    name: 'evenements',
    component: evenements
    },
    {
    path: '/pageProfil',
    name: 'pageProfil',
    component: pageProfil
    },
    {
    path: '/reservationSalle',
    name: 'reservationSalle',
    component: reservationSalle
    }
  ]
});
