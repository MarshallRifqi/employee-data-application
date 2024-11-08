<template>
        <!-- Sidebar -->
        <ul class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

<!-- Sidebar - Brand -->
<a class="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
    <div class="sidebar-brand-icon rotate-n-15">
        <i class="fas fa-laugh-wink"></i>
    </div>
    <div class="sidebar-brand-text mx-3">SB Admin <sup>2</sup></div>
</a>

<!-- Divider -->
<hr class="sidebar-divider my-0">

<!-- Nav Item - Dashboard -->
<li class="nav-item active">
    <a class="nav-link" href="index.html">
        <i class="fas fa-fw fa-tachometer-alt"></i>
        <span>Dashboard</span></a>
</li>

<!-- Divider -->
<hr class="sidebar-divider">

<!-- Heading -->
<div class="sidebar-heading">
    Interface
</div>

<!-- Nav Item - Pages Collapse Menu -->
<li class="nav-item">
    <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseTwo"
        aria-expanded="true" aria-controls="collapseTwo">
        <i class="fas fa-fw fa-cog"></i>
        <span>Components</span>
    </a>
    <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
        <div class="bg-white py-2 collapse-inner rounded">
            <h6 class="collapse-header">Custom Components:</h6>
            <a class="collapse-item" href="buttons.html">Buttons</a>
            <a class="collapse-item" href="cards.html">Cards</a>
        </div>
    </div>
</li>

<!-- Nav Item - Utilities Collapse Menu -->
<li class="nav-item">
    <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseUtilities"
        aria-expanded="true" aria-controls="collapseUtilities">
        <i class="fas fa-fw fa-wrench"></i>
        <span>Utilities</span>
    </a>
    <div id="collapseUtilities" class="collapse" aria-labelledby="headingUtilities"
        data-parent="#accordionSidebar">
        <div class="bg-white py-2 collapse-inner rounded">
            <h6 class="collapse-header">Custom Utilities:</h6>
            <a class="collapse-item" href="utilities-color.html">Colors</a>
            <a class="collapse-item" href="utilities-border.html">Borders</a>
            <a class="collapse-item" href="utilities-animation.html">Animations</a>
            <a class="collapse-item" href="utilities-other.html">Other</a>
        </div>
    </div>
</li>

<!-- Divider -->
<hr class="sidebar-divider">

<!-- Heading -->
<div class="sidebar-heading">
    Addons
</div>

<!-- Nav Item - Pages Collapse Menu -->
<li class="nav-item">
    <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapsePages"
        aria-expanded="true" aria-controls="collapsePages">
        <i class="fas fa-fw fa-folder"></i>
        <span>Pages</span>
    </a>
    <div id="collapsePages" class="collapse" aria-labelledby="headingPages" data-parent="#accordionSidebar">
        <div class="bg-white py-2 collapse-inner rounded">
            <h6 class="collapse-header">Login Screens:</h6>
            <a class="collapse-item" href="login.html">Login</a>
            <a class="collapse-item" href="register.html">Register</a>
            <a class="collapse-item" href="forgot-password.html">Forgot Password</a>
            <div class="collapse-divider"></div>
            <h6 class="collapse-header">Other Pages:</h6>
            <a class="collapse-item" href="404.html">404 Page</a>
            <a class="collapse-item" href="blank.html">Blank Page</a>
        </div>
    </div>
</li>

<!-- Nav Item - Charts -->
<li class="nav-item">
    <a class="nav-link" href="charts.html">
        <i class="fas fa-fw fa-chart-area"></i>
        <span>Charts</span></a>
</li>

<!-- Nav Item - Tables -->
<li class="nav-item">
    <a class="nav-link" href="tables.html">
        <i class="fas fa-fw fa-table"></i>
        <span>Tables</span></a>
</li>

<!-- Divider -->
<hr class="sidebar-divider d-none d-md-block">

<!-- Sidebar Toggler (Sidebar) -->
<div class="text-center d-none d-md-inline">
    <button class="rounded-circle border-0" id="sidebarToggle"></button>
</div>

<!-- Sidebar Message -->
<div class="sidebar-card d-none d-lg-flex">
    <img class="sidebar-card-illustration mb-2" src="../assets/img/undraw_rocket.svg" alt="...">
    <p class="text-center mb-2"><strong>SB Admin Pro</strong> is packed with premium features, components, and more!</p>
    <a class="btn btn-success btn-sm" href="https://startbootstrap.com/theme/sb-admin-pro">Upgrade to Pro!</a>
</div>

</ul>
<!-- End of Sidebar -->
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
