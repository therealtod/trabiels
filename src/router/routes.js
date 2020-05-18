
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: 'gameroom', component: () => import('pages/GameRoom.vue') },
      { path: 'newgame', component: () => import('pages/CreateGame.vue') },
      { path: 'lobby', component: () => import('pages/Lobby.vue') },
    ],
  },
  {
    path: '/auth',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: 'forgotPassword',
        name: 'ForgotPassword',
        component: () => import('pages/ForgotPassword.vue'),
      },
      {
        path: 'login',
        name: 'Login',
        component: () => import('pages/Authentication.vue'),
      },
      {
        path: 'register',
        name: 'Register',
        component: () => import('pages/Authentication.vue'),
      },
    ],
  },
  {
    path: '/user',

    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: 'profile',
        name: 'Profile',
        component: () => import('pages/UserProfile.vue'),
        meta: {
          requiresAuth: true,
        },
      },
    ],
  },
];

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue'),
  });
}

export default routes;
