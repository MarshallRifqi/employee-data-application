<template>
  <aside id="sidebar">
    <!-- Content For Sidebar -->
    <div class="h-100">
      <div class="sidebar-logo mb-5">
        <img src="../assets/nusantara_white.png" class="logo-nusantara" alt="">
        <br>
        <a href="#">Nusantara</a>
      </div>
      <ul class="sidebar-nav nav-tabs">
        <li class="sidebar-header mb-4">
          Hello, Admin!
        </li>
        <li class="sidebar-item">
          <RouterLink to="/dashboard" class="sidebar-link icon-link" exact>
            <i class="bi bi-house"></i>
            <i class="fa-solid fa-list pe-2"></i>
            Dashboard
          </RouterLink>
        </li>
        <li class="sidebar-item">
          <RouterLink to="/barangmaster" class="sidebar-link icon-link" exact>
            <i class="bi bi-box-seam"></i>
            <i class="fa-solid fa-list pe-2"></i>
            Master Barang
          </RouterLink>
        </li>
        <li class="sidebar-item">
          <RouterLink :to="{ name: 'BarangMasuk' }" class="sidebar-link icon-link">
            <i class="bi bi-box-arrow-in-down"></i>
            <i class="fa-solid fa-list pe-2"></i>
            Barang Masuk
          </RouterLink>
        </li>
        <li class="sidebar-item">
          <RouterLink :to="{ name: 'customers' }" class="sidebar-link icon-link">
            <i class="bi bi-person-workspace"></i>
            <i class="fa-solid fa-list pe-2"></i>
            Customer
          </RouterLink>
        </li>
        <li class="sidebar-item">
          <RouterLink :to="{ name: 'BarangKeluar' }" class="sidebar-link icon-link">
            <i class="bi bi-box-arrow-up"></i>
            <i class="fa-solid fa-list pe-2"></i>
            Barang Keluar
          </RouterLink>
        </li>
        <li class="sidebar-item">
          <a href="#submenu2" data-bs-toggle="collapse" class="sidebar-link icon-link">
            <i class="bi bi-truck"></i>
            <i class="fa-solid fa-list pe-2"></i>
            Pengiriman
          </a>
          <ul class="collapse nav flex-column ms-1" id="submenu2" data-bs-parent="#menu">
            <li class="sub-link">
              <RouterLink :to="{ name: 'Pengiriman' }" class="sidebar-link icon-link">
                <i class="bi bi-truck"></i>
                <i class="fa-solid fa-list pe-2"></i>
                Pengiriman
              </RouterLink>
            </li>
            <li class="sub-link">
              <RouterLink :to="{ name: 'RiwayatPengiriman' }" class="sidebar-link icon-link">
                <i class="bi bi-truck"></i>
                <i class="fa-solid fa-list pe-2"></i>
                Riwayat Pengiriman
              </RouterLink>
            </li>
          </ul>
        </li>
        <li class="sidebar-item mt-5">
          <a @click="handleLogout" class="sidebar-link icon-link">
            <i class="fa-solid fa-list pe-2 bi-box-arrow-right"></i>
            Logout
          </a>
        </li>
      </ul>
    </div>
  </aside>
</template>

<script>
import axios from 'axios';
import { useRouter } from 'vue-router';
import Cookies from 'js-cookie';
// import Swal from 'sweetalert2';

export default {
  setup() {
    const router = useRouter();
    return { router };
  },
  methods: {
    async handleLogout() {
      try {
        const response = await axios.delete('/logout', {
          withCredentials: true // Ensure cookies are sent
        });
        if (response.status === 200) {
          // localStorage.removeItem('token'); // Remove the token from local storage
          this.router.push({ name: 'Login' });
          Cookies.remove('token');
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: response.data.msg,
            showConfirmButton: false,
            timer: 1500
          });
        }
      } catch (error) {
        console.error('Logout failed:', error);
        Swal.fire({
          position: "top-end",
          icon: "error",
          title: error.response.data.msg,
          showConfirmButton: false,
          timer: 1500
        });
      }
    },
  },
};
</script>

<style scoped>
/* Sidebar Elements Style */
/* .h-100{
  background-color: #E94F37;
} */

a {
    cursor: pointer;
    text-decoration: none;
    font-family: 'Poppins', sans-serif;
}

.logo-nusantara {
  margin-left: 30px;
  width: 150px;
  height: 150px;
}


#sidebar {
    max-width: 264px;
    min-width: 264px;
    background: #cf1313;
    transition: all 0.35s ease-in-out;
}

.sidebar-logo {
  padding: 1.15rem;
}

.sidebar-logo a {
  color: #e9ecef;
  font-size: 1.15rem;
  font-weight: 600;
  margin-left: 60px;
}

.sidebar-nav {
  flex-grow: 1;
  list-style: none;
  margin-bottom: 0;
  padding-left: 0;
  margin-left: 0;
}

.sidebar-header {
  color: #e9ecef;
  font-size: .75rem;
  padding: 1.5rem 1.5rem .375rem;
}

.sidebar-link {
  padding: .625rem 1.625rem;
  color: #e9ecef;
  position: relative;
  display: block;
  font-size: 0.875rem;
}

.sidebar-link[data-bs-toggle="collapse"]::after {
  border: solid;
  border-width: 0 .075rem .075rem 0;
  content: "";
  display: inline-block;
  padding: 2px;
  position: absolute;
  right: 1.5rem;
  top: 1.4rem;
  transform: rotate(-135deg);
  transition: all .2s ease-out;
}

.sidebar-link[data-bs-toggle="collapse"].collapsed::after {
  transform: rotate(45deg);
  transition: all .2s ease-out;
}

.router-link-exact-active {
  color: #000000; /* Active link color */
  background-color: #ffffff; /* Active link background color */
}

.sidebar-item{
  margin-bottom: 15px;
}

.sub-link{
  margin-left: 10px;
  /* padding: 10px; */
  /* margin-bottom: 15px; */
  margin-top: 15px
}
</style>
