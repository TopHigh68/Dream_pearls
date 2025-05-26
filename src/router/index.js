import { createRouter, createWebHistory } from 'vue-router'
import AccueilViews from '../views/AccueilViews.vue'
import Layoutviews from '../components/Layoutviews.vue'
import ProduitViews from '../views/ProduitViews.vue'
import AboutViews from '../views/A-proposViews.vue'
import ContactViews from '../views/ContactsViews.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: Layoutviews,
      children:[
         {
          path: '/',
          name: 'Accueil',
          component: AccueilViews,
        },
        {
          path: '/produits',
          name: 'produits',
          component: ProduitViews,
        },
        {
          path: '/a-propos',
          name: 'a-propos',
          component: AboutViews,
        },
        {
          path: '/contact',
          name: 'contact',
          component: ContactViews,
        },

      ]
    },
  ],
})

export default router
