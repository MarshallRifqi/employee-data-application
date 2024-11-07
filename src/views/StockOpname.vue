<template>
  <div class="wrapper">
    <Aside/>

    <div class="main">
            <div class="input-group mb-5">
                <input type="search" placeholder="Cari stok barang" aria-describedby="button-addon5" class="form-control rounded-pill">
                <div class="input-group-append mx-3">
                    <button id="button-addon5" type="submit" class="btn btn-primary"><i class="bi bi-search"></i>Search</button>
                </div>
                <!-- <div class="tambah-barang">
                    <a href="#" class="btn btn-primary">
                        <RouterLink :to="{ name: 'Login' }" class="tambah-button">Tambah Barang</RouterLink>
                    </a>
                </div> -->
            </div>
                    <!-- Table Element -->
                    <div class="card border-0 mx-5">
                        <div class="card-header">
                            <h5 class="card-title">
                                Recent Orders
                            </h5>
                        </div>
                        <div class="card-body">
                            <table class="table">
                                <thead>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">Nomor DO</th>
                                        <th scope="col">Kode Barang</th>
                                        <th scope="col">Deskripsi</th>
                                        <th scope="col">Aksi</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">1</th>
                                        <td>DO-001</td>
                                        <td>DUEL-1</td>
                                        <td>Dueller</td>
                                        <td>
                                          <button class="btn btn-sm btn-danger mx-2">Delete</button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope="row">2</th>
                                        <td>DO-002</td>
                                        <td>PTNZ-3</td>
                                        <td>Potenza</td>
                                        <td>
                                          <button class="btn btn-sm btn-danger mx-2">Delete</button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope="row">3</th>
                                        <td>DO-003</td>
                                        <td>ECOP-2</td>
                                        <td>Ecopia</td>
                                        <td>
                                          <button class="btn btn-sm btn-danger mx-2">Delete</button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope="row">4</th>
                                        <td>DO-001</td>
                                        <td>DUEL-1</td>
                                        <td>Dueller</td>
                                        <td>
                                          <button class="btn btn-sm btn-danger mx-2">Delete</button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope="row">5</th>
                                        <td>DO-002</td>
                                        <td>PTNZ-3</td>
                                        <td>Potenza</td>
                                        <td>
                                          <button class="btn btn-sm btn-danger mx-2">Delete</button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope="row">6</th>
                                        <td>DO-003</td>
                                        <td>ECOP-2</td>
                                        <td>Ecopia</td>
                                        <td>
                                          <button class="btn btn-sm btn-danger mx-2">Delete</button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope="row">7</th>
                                        <td>DO-003</td>
                                        <td>ECOP-2</td>
                                        <td>Ecopia</td>
                                        <td>
                                          <button class="btn btn-sm btn-danger mx-2">Delete</button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope="row">8</th>
                                        <td>DO-003</td>
                                        <td>ECOP-2</td>
                                        <td>Ecopia</td>
                                        <td>
                                          <button class="btn btn-sm btn-danger mx-2">Delete</button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope="row">9</th>
                                        <td>DO-003</td>
                                        <td>ECOP-2</td>
                                        <td>Ecopia</td>
                                        <td>
                                          <button class="btn btn-sm btn-danger mx-2">Delete</button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope="row">10</th>
                                        <td>DO-003</td>
                                        <td>ECOP-2</td>
                                        <td>Ecopia</td>
                                        <td>
                                          <button class="btn btn-sm btn-danger mx-2">Delete</button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
  

</template>


<script setup>
import Aside from '../components/Aside.vue'
</script>


<style scoped>


@import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');

*,
::after,
::before {
  box-sizing: border-box;
}

body {
  font-family: 'Poppins', sans-serif;
  font-size: 0.875rem;
  opacity: 1;
  overflow-y: scroll;
  margin: 0;
}

a {
  cursor: pointer;
  text-decoration: none;
  font-family: 'Poppins', sans-serif;
}

li {
  list-style: none;
}

h4 {
  font-family: 'Poppins', sans-serif;
  font-size: 1.275rem;
  color: var(--bs-emphasis-color);
}

::-webkit-input-placeholder {
 font-size: 15px;
}

.tambah-button {
  color: #FFF;
  font-size: 0.875rem;
}

.input-group {
    display: flex;
    /* align-content: center;
    align-items: center;
    justify-content: center;
    align-items: center; */
    width: 50%;
    /* margin-left: 300px; */
    /* margin-top: 20px; */
    font-size: 1rem;
}

.footer {
  display: flex;
  align-content: center;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 60px;
  background-color: var(--bs-primary-bg-subtle);

}

/* Layout for admin dashboard skeleton */

.wrapper {
  align-items: stretch;
  display: flex;
  width: 100%;
}


.main {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    min-height: 100vh;
    min-width: 0;
    overflow: hidden;
    transition: all 0.35s ease-in-out;
    width: 100%;
    background: var(--bs-dark-bg-subtle);
}

.main .card {
    width: 90%;
}

.main .tambah-barang {
    width: 30%;
}


.avatar {
  height: 40px;
  width: 40px;
}

.navbar-expand .navbar-nav {
  margin-left: auto;
}

.content {
  flex: 1;
  max-width: 100vw;
  width: 100vw;
}

.form-control:focus {
box-shadow: none;
}

.form-control-underlined {
border-width: 0;
border-bottom-width: 1px;
border-radius: 0;
padding-left: 0;
}


@media (min-width:768px) {
  .content {
      max-width: auto;
      width: auto;
  }
}

.card {
  box-shadow: 0 0 .875rem 0 rgba(60, 35, 34, 0.05);
  margin-bottom: 24px;
}

.illustration {
  background-color: var(--bs-primary-bg-subtle);
  color: var(--bs-emphasis-color);
}

.illustration-img {
  max-width: 150px;
  width: 100%;
}

/* Sidebar Toggle */

#sidebar.collapsed {
  margin-left: -264px;
}

/* Footer and Nav */

@media (max-width:767.98px) {

  .js-sidebar {
      margin-left: -264px;
  }

  #sidebar.collapsed {
      margin-left: 0;
  }

  .navbar,
  footer {
      width: 100vw;
  }
}

/* Theme Toggler */

.theme-toggle {
  position: fixed;
  top: 50%;
  transform: translateY(-65%);
  text-align: center;
  z-index: 10;
  right: 0;
  left: auto;
  border: none;
  background-color: var(--bs-body-color);
}

html[data-bs-theme="dark"] .theme-toggle .fa-sun,
html[data-bs-theme="light"] .theme-toggle .fa-moon {
  cursor: pointer;
  padding: 10px;
  display: block;
  font-size: 1.25rem;
  color: #FFF;
}

html[data-bs-theme="dark"] .theme-toggle .fa-moon {
  display: none;
}

html[data-bs-theme="light"] .theme-toggle .fa-sun {
  display: none;
}

</style>