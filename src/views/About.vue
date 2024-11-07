<template>
    <div class="wrapper">
      <Aside/>
  
      <div class="main">
        <div class="input-group mb-5">
          <input type="search" placeholder="Cari stok barang" aria-describedby="button-addon5" class="form-control rounded-pill">
          <div class="input-group-append mx-3">
            <button id="button-addon5" type="submit" class="btn btn-danger"><i class="bi bi-search"></i>Search</button>
          </div>
        </div>
        <!-- Table Element -->
        <div class="card border-0 mx-5 p-2">
          <div class="card-header">
            <h5 class="card-title">List Barang Masuk</h5>
          </div>
          <div class="card-body">
            <table class="table table-light table-striped">
              <thead>
                <tr>
                  <th scope="col">No</th>
                  <th scope="col">Tanggal dan Waktu</th>
                  <th scope="col">Id Pengiriman</th>
                  <th scope="col">Nama Ban</th>
                  <th scope="col">Customer</th>
                  <th scope="col">Status</th>
                  <th scope="col">Stok</th>
                  <th scope="col">Aksi</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <!-- <th></th> -->
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td><span class="badge rounded-pill bg-primary">Pengecekan</span></td>
                  <td></td>
                  <td>
                    <button class="btn btn-sm btn-primary mx-2" @click="openEditModal(barangMsk)">Detail</button>
                    <!-- <button class="btn btn-sm btn-danger mx-2" @click="confirmDelete(barangMsk.id_barang_masuk)"><i class="bi bi-trash"></i> <span>Delete</span></button> -->
                  </td>
                </tr>
                <tr>
                  <!-- <th></th> -->
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td><span class="badge rounded-pill bg-secondary">Dalam Antrean</span></td>
                  <td></td>
                  <td>
                    <button class="btn btn-sm btn-primary mx-2" @click="openEditModal(barangMsk)">Detail</button>
                    <!-- <button class="btn btn-sm btn-danger mx-2" @click="confirmDelete(barangMsk.id_barang_masuk)"><i class="bi bi-trash"></i> <span>Delete</span></button> -->
                  </td>
                </tr>
                <tr>
                  <!-- <th></th> -->
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td><span class="badge rounded-pill bg-warning">Pengiriman</span></td>
                  <td></td>
                  <td>
                    <button class="btn btn-sm btn-primary mx-2" @click="openEditModal(barangMsk)">Detail</button>
                    <!-- <button class="btn btn-sm btn-danger mx-2" @click="confirmDelete(barangMsk.id_barang_masuk)"><i class="bi bi-trash"></i> <span>Delete</span></button> -->
                  </td>
                </tr>
                <tr>
                  <!-- <th></th> -->
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td><span class="badge rounded-pill bg-success">Terkirim</span></td>
                  <td></td>
                  <td>
                    <button class="btn btn-sm btn-primary mx-2" @click="openEditModal(barangMsk)">Detail</button>
                    <!-- <button class="btn btn-sm btn-danger mx-2" @click="confirmDelete(barangMsk.id_barang_masuk)"><i class="bi bi-trash"></i> <span>Delete</span></button> -->
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
  import EditModal from '../components/EditModal.vue'
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
  
  .tbl-no {
    width: 3%;
  }
  
  .tbl-do {
    width: 10%;
  }
  
  .tbl-kode {
    width: 10%;
  }
  
  .tbl-deskripsi {
    width: 15%;
  }
  
  .tbl-aksi {
    width: 10%;
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
  
  .main .riwayat {
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