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
      meta: {title:'Home DKB'  }

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
