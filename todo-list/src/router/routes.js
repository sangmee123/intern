const routes = [
  {
    path: '/',
    component: () => import('pages/TodoApp.vue'),
    // component: () => import('layouts/MainLayout.vue'),
    // children: [
    //   { path: '', component: () => import('pages/TodoApp.vue') }
    // ]
  },

  // // Always leave this as last one,
  // // but you can also remove it
  // {
  //   path: '*',
  //   component: () => import('pages/Error404.vue')
  // }
]

export default routes
