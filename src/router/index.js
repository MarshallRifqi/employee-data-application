import { createRouter, createWebHistory } from 'vue-router'
import Cookies from 'js-cookie';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('../views/Home.vue'),
      meta: { requiresAuth: true, title:'Home' },

    },
    {
      path: '/barangmasuk',
      name: 'BarangMasuk',
      component: () => import('../views/BarangMasuk.vue'),
      meta: { requiresAuth: true, title:'Barang Masuk'  },

    },
    {
      path: '/barangkeluar',
      name: 'BarangKeluar',
      component: () => import('../views/BarangKeluar.vue'),
      meta: { requiresAuth: true, title:'Barang Keluar'  },

    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: () => import('../views/Dashboard.vue'),
      meta: { requiresAuth: true, title:'Dashboard'  },

    },
    {
      path: '/login',
      name: 'Login',
      component: () => import('../views/LoginForm.vue'),
      meta: {title:'Sign In'  },

    },
    {
      path: '/register',
      name: 'Register',
      component: () => import('../views/RegisterForm.vue'),
      meta: {title:'Sign Up'  },

    },
    {
      path: '/stockopname',
      name: 'StockOpname',
      component: () => import('../views/StockOpname.vue'),
      meta: { requiresAuth: true   },

    },
    {
      path: '/pengiriman',
      name: 'Pengiriman',
      component: () => import('../views/Pengiriman.vue'),
      meta: { requiresAuth: true, title:'Pengiriman'  },

    },
    {
      path: '/about',
      name: 'About',
      component: () => import('../views/About.vue'),
      meta: { requiresAuth: true, title:'About'  },

    },
    {
      path: '/riwayatpengiriman',
      name: 'RiwayatPengiriman',
      component: () => import('../views/RiwayatPengiriman.vue'),
      meta: { requiresAuth: true, title:'Riwayat Pengiriman'  },

    },
    {
      path: '/detailpengiriman',
      name: 'DetailPengiriman',
      component: () => import('../views/DetailPengiriman.vue'),
      meta: { requiresAuth: true, title:'Detail'  },

    },
    {
      path: '/barangmaster',
      name: 'barangmaster',
      component: () => import('../views/MasterBarang.vue'),
      meta: { requiresAuth: true, title:'Master Barang'  },

    },
    {
      path: '/customers',
      name: 'customers',
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/CustomerView.vue'),
          meta: { requiresAuth: true, title:'Customer'  },
    },
  ]
})

// import { createRouter, createWebHistory } from 'vue-router';
// import Home from '../views/Home.vue';
// import BarangMasuk from '../views/BarangMasuk.vue';
// import BarangKeluar from '../views/BarangKeluar.vue';
// import Dashboard from '../views/Dashboard.vue';
// import LoginForm from '../views/LoginForm.vue';
// import RegisterForm from '../views/RegisterForm.vue';
// import StockOpname from '../views/StockOpname.vue';
// import Pengiriman from '../views/Pengiriman.vue';
// import About from '../views/About.vue';
// import RiwayatPengiriman from '../views/RiwayatPengiriman.vue';
// import DetailPengiriman from '../views/DetailPengiriman.vue';
// import MasterBarang from '../views/MasterBarang.vue';
// import CustomerView from '../views/CustomerView.vue';

// const routes = [
//   {
//     path: '/',
//     name: 'Home',
//     component: Home,
//   },
//   {
//     path: '/barangmasuk',
//     name: 'BarangMasuk',
//     component: BarangMasuk,
//     meta: { requiresAuth: true },
//   },
//   {
//     path: '/barangkeluar',
//     name: 'BarangKeluar',
//     component: BarangKeluar,
//     meta: { requiresAuth: true },
//   },
//   {
//     path: '/dashboard',
//     name: 'Dashboard',
//     component: Dashboard,
//     meta: { requiresAuth: true },
//   },
//   {
//     path: '/login',
//     name: 'Login',
//     component: LoginForm,
//   },
//   {
//     path: '/register',
//     name: 'Register',
//     component: RegisterForm,
//   },
//   {
//     path: '/stockopname',
//     name: 'StockOpname',
//     component: StockOpname,
//     meta: { requiresAuth: true },
//   },
//   {
//     path: '/pengiriman',
//     name: 'Pengiriman',
//     component: Pengiriman,
//     meta: { requiresAuth: true },
//   },
//   {
//     path: '/about',
//     name: 'About',
//     component: About,
//   },
//   {
//     path: '/riwayatpengiriman',
//     name: 'RiwayatPengiriman',
//     component: RiwayatPengiriman,
//     meta: { requiresAuth: true },
//   },
//   {
//     path: '/detailpengiriman',
//     name: 'DetailPengiriman',
//     component: DetailPengiriman,
//     meta: { requiresAuth: true },
//   },
//   {
//     path: '/barangmaster',
//     name: 'barangmaster',
//     component: MasterBarang,
//     meta: { requiresAuth: true },
//   },
//   {
//     path: '/customers',
//     name: 'customers',
//     component: CustomerView,
//     meta: { requiresAuth: true },
//   },
// ];

// const router = createRouter({
//   history: createWebHistory(import.meta.env.BASE_URL),
//   routes,
// });

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    const token = Cookies.get('token');
    console.log('Token in beforeEach:', token); // Log the token status
    if (token) {
      next();
    } else {
      next({ name: 'Login' });
    }
  } else {
    next();
  }
});

export default router
