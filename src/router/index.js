import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: () => import('@/views/FrontView.vue'),
      children: [{
        path: '',
        component: () => import('@/views/HomeView.vue'),
        meta: {
          keepAlive: true 
      }
      },
      {
        path: 'about',
        component: () => import('@/views/AboutView.vue'),
        meta: {
          keepAlive: true 
      }
      },
      {
        path: 'gallery',
        component: () => import('@/views/GalleryView.vue'),
        meta: {
          keepAlive: true 
      }
      },
      {
        path: 'contact',
        component: () => import('@/views/ContactView.vue'),
        meta: {
          keepAlive: true 
      }
      },


      ]
    },

  ]
})

router.afterEach((to, from, next) => {
  window.scrollTo(0, 0);


})

export default router
