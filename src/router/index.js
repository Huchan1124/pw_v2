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
          title: 'Home'
      },
      },
      {
        path: 'about',
        component: () => import('@/views/AboutView.vue'),
        meta: {
          title: 'About'
      }
      },
      {
        path: 'gallery',
        component: () => import('@/views/GalleryView.vue'),
        meta: {
          title: 'Gallery'
      }
      },
      {
        path: 'contact',
        component: () => import('@/views/ContactView.vue'),
        meta: {
          title: 'Contact'
      }
      },


      ]
    },

  ]
})

router.afterEach((to, from, next) => {
  window.scrollTo(0, 0);
  document.title = `${to.meta.title}`;
  next();


})

export default router
