<template>
  <div class="wrapper">
    <Aside/>

    <div class="main">

      <div class="card border-0 mx-5 p-2">
        <div class="card-header">
          <div class="container">
            <div class="row">
              <div class="col">
                <img src="../assets/nusantara_team__update.png" class="logo-nusantara" alt="">
              </div>
              <div class="col-8 text-center">
                <h3>Detail Pengiriman</h3>
                <p>Nusantara Warehouse Management System</p>
              </div>
              <div class="col">
                <img src="../assets/nusantara_team__update.png" class="logo-nusantara" alt="">
              </div>
            </div>
          </div>
        </div>
        <div class="card-body">
          <div class="row">
            <div class="col-8">
              <p>Tanggal Pengiriman</p>
              <p>ID Pengiriman</p>
              <p>Nama Ban</p>
            </div>
            <div class="col-4">
              <p>Customer</p>
              <p>ID Pengiriman</p>
              <p>Nama Ban</p>
            </div>
          </div>
        </div>
        <div class="card-body">
          <!-- Table Element -->
          <table class="table table-light table-striped">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Id barang masuk</th>
                <th scope="col">Kode Barang</th>
                <th scope="col">No DO</th>
                <th scope="col">Nama Ban</th>
                <th scope="col">Tipe Ban</th>
                <th scope="col">Stok</th>
                <th class="text-center" scope="col">Aksi</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(barangMsk, index) in barangList" :key="barangMsk.id_barang_masuk">
                <th scope="row">{{ index + 1 }}</th>
                <td>{{ barangMsk.id_barang_masuk }}</td>
                <td>{{ barangMsk.id_barang }}</td>
                <td>{{ barangMsk.no_do }}</td>
                <td>{{ barangMsk.barang.nama_barang }}</td>
                <td>{{ barangMsk.barang.kategori }}</td>
                <td>{{ barangMsk.kuantitas }}</td>
                <td>
                  <!-- <button class="btn btn-sm btn-primary mx-2"><i class="bi bi-pencil-square"></i> <span>Edit</span></button> -->
                  <!-- <button type="button" class="btn btn-danger btn-sm " data-bs-toggle="modal" data-bs-target="#editModal" @click="openEditModal(barangMsk)">edit</button> -->
                  <button class="btn btn-sm btn-primary mx-2" @click="openEditModal(barangMsk)"><i class="bi bi-pencil-square"></i> <span>Edit</span></button>
                  <!-- <button class="btn btn-sm btn-danger mx-2" @click="deleteBarang(barangMsk.id_barang_masuk)"><i class="bi bi-trash"></i> <span>Delete</span></button> -->
                  <button class="btn btn-sm btn-danger mx-2" @click="confirmDelete(barangMsk.id_barang_masuk)"><i class="bi bi-trash"></i> <span>Delete</span></button>
                  <button class="btn btn-sm btn-primary mx-2" @click="opendetailModal()">Detail</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="card-footer text-center">
          <div class="col mb-5 mt-5">
            <img src="https://via.placeholder.com/150" alt="QR Code" class="img-fluid">
          </div>
          <button class="btn btn-primary" @click="print">Print</button>
        </div>
      </div>
    </div>
  </div>

</template>
  
<script setup>
import Aside from '@/components/Aside.vue';
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

  .logo-nusantara {
    height: 100px;
    width: 100px;
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
