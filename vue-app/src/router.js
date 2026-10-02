import { createRouter, createWebHistory } from 'vue-router';
import PageNotFound from '@/components/page-not-found.vue';

export default createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/products',
    },
    {
      path: '/products',
      name: 'products',
      component: () =>
        import(
          /* webpackChunkName: "products" */ './views/products/products.vue'
        ),
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ './views/about.vue'),
    },
    {
      path: '/:pathMatch(.*)*',
      component: PageNotFound,
    },
  ],
});
