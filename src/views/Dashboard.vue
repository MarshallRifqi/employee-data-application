<template>
  <div class="wrapper">
    <Aside/>
    <div class="main">
            <nav class="navbar navbar-expand px-3 border-bottom">
                <button class="btn" id="sidebar-toggle" type="button">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="navbar-collapse navbar">
                    <ul class="navbar-nav">
                        <li class="nav-item dropdown">
                            <a href="#" data-bs-toggle="dropdown" class="nav-icon pe-md-0">
                                <img src="../assets/nusantara.png" class="avatar img-fluid rounded" alt="">
                            </a>
                            <div class="dropdown-menu dropdown-menu-end">
                                <a href="#" class="dropdown-item">Profile</a>
                                <a href="#" class="dropdown-item">Setting</a>
                                <a href="#" class="dropdown-item">Logout</a>
                            </div>
                        </li>
                    </ul>
                </div>
            </nav>

            <main class="content px-3 py-2">
              <div class="mb-3 page-title">
                  <h2 page-title>Dashboard</h2>
              </div>
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-12 col-md-4 d-flex">
                            <div class="card flex-fill border-0 illustration">
                                <div class="card-body p-0 d-flex flex-fill">
                                    <div class="row g-0 w-100">
                                        <div class="col-10">
                                            <div class="p-3 m-1">
                                                <h4>Jumlah Barang Masuk</h4>
                                                <h2 class="mb-0">{{ MasukList }}</h2>
                                            </div>
                                        </div>  
                                        <div class="col-2">
                                            <div class="p-3 m-1">
                                                <h2><i class="bi bi-bag-plus"></i></h2>
                                            </div>
                                        </div>  
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-12 col-md-4 d-flex bg-sukse">
                            <div class="card flex-fill border-0 out">
                                <div class="card-body p-0 d-flex flex-fill">
                                    <div class="row g-0 w-100">
                                        <div class="col-10">
                                            <div class="p-3 m-1">
                                                <h4>Jumlah Barang Keluar</h4>
                                                <h2 class="mb-0">{{ KeluarList }}</h2>
                                            </div>
                                        </div>  
                                        <div class="col-2">
                                            <div class="p-3 m-1">
                                                <h2><i class="bi bi-bag-dash"></i></h2>
                                            </div>
                                        </div>  
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-12 col-md-4 d-flex">
                            <div class="card flex-fill border-0 send">
                                <div class="card-body p-0 d-flex flex-fill">
                                    <div class="row g-0 w-100">
                                        <div class="col-10">
                                            <div class="p-3 m-1">
                                                <h4>Jumlah Barang Terkirim</h4>
                                                <h2 class="mb-0">{{ TerkirimList }}</h2>
                                                <!-- <p v-if="TerkirimList.barang_keluar">ID Pengiriman: <strong>{{ TerkirimList.barang_keluar.kuantitas }}</strong></p> -->
                                                <!-- <h2><i class="bi bi-clipboard2-check"></i></h2> -->
                                            </div>
                                        </div>  
                                        <div class="col-2">
                                            <div class="p-3 m-1">
                                                <h2><i class="bi bi-clipboard2-check"></i></h2>
                                            </div>
                                        </div>  
                                    </div>
                                </div>
                            </div>
                        </div>
        
                        
                      </div>
                    
                    
                    <!-- Table Element -->
      <div class="card border table-shadow p-3">
        <div class="card-header">
          <h5 class="card-title">List Barang</h5>
        </div>
        <div class="card-body table-responsive">
          <!-- <div class="alert alert-primary" role="alert"></div> -->
          <table class="table table-light table-bordered" id="example">
            <thead class="table-danger mt-5">
              <tr>
                <th scope="col">#</th>
                <th scope="col">Id Barang</th>
                <th scope="col">Nama Ban</th>
                <th scope="col">Kategori Ban</th>
                <th scope="col">Harga</th>
                <th scope="col">Stok</th>
                <th scope="col">Value</th>
                <!-- <th scope="col">Aksi</th> -->
              </tr>
            </thead>
            <tbody>
              <tr v-for="(barang, index) in barangList" :key="barang.id_barang">
                <th scope="row">{{ index + 1 }}</th>
                <td>{{ barang.id_barang }}</td>
                <td>{{ barang.nama_barang }}</td>
                <td>{{ barang.kategori }}</td>
                <td>{{ barang.harga}}</td>
                <td>{{ barang.stok}}</td>
                <td>{{ barang.total_harga}}</td>
                <!-- <td>
                  <button type="button" class="btn btn-sm btn-primary " data-bs-toggle="modal" data-bs-target="#editModal" @click="openEditModal(barang)"> <i class="bi bi-pencil-square"></i> <span>Edit</span> </button>
                  <button class="btn btn-sm btn-danger mx-2" @click="deleteBarang(barang.id_barang)"> <i class="bi bi-trash"></i> <span>Delete</span></button>
                  <button class="btn btn-sm btn-danger mx-2" @click="confirmDelete(barang.id_barang)"><i class="bi bi-trash"></i> <span>Delete</span></button>
                </td> -->
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
            </main>
            <a href="#" class="theme-toggle">
                <i class="fa-regular fa-moon"></i>
                <i class="fa-regular fa-sun"></i>
            </a>
        </div>
    </div>
    
</template>

<script setup>
import Aside from '../components/Aside.vue'
import { ref, onMounted, nextTick } from 'vue';
import axios from 'axios'; 
const barangList = ref([]);
const MasukList = ref([]);
const KeluarList = ref([]);
const TerkirimList = ref([]);
// // import ChartComponent from '@/components/ChartComponent.vue';

const fetchData = async () => {
  try {
    const response = await axios.get('/barang');
    barangList.value = response.data.barang;
    await nextTick();
    $('#example').DataTable();
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

const fetchDataMasuk = async () => {
  try {
    const response = await axios.get('/dashboard/jmlBarangMasuk');
    MasukList.value = response.data.data.barangMasuk._sum.kuantitas;
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

const fetchDataKeluar = async () => {
  try {
    const response = await axios.get('/dashboard/jmlBarangKeluar');
    KeluarList.value = response.data.data.barangKeluar._sum.kuantitas;
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

const fetchDataPengiriman = async () => {
  try {
    const response = await axios.get('/dashboard/jmlBarangTerkirim');
    TerkirimList.value = response.data.data.barangTerkirim;
    console.log(response.data.data)
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};


onMounted(fetchData );
onMounted(fetchDataMasuk);
onMounted(fetchDataPengiriman);
onMounted(fetchDataKeluar);
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
  /* opacity: 1; */
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
  align-content: center;
  justify-content: center;
  align-items: center;
  width: 600px;
  margin-left: 300px;
  margin-top: 20px;
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
  padding: 20px;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  min-width: 0;
  overflow: hidden;
  transition: all 0.35s ease-in-out;
  width: 100%;
  /* background: var(--bs-dark-bg-subtle); */
}

.main .card {
    width: 100%;
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
  /* max-width: 100vw; */
  /* width: 100vw; */
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
.out {
  background-color: var(--bs-warning-bg-subtle);
  color: var(--bs-emphasis-color);
}
.send {
  background-color: var(--bs-success-bg-subtle);
  color: var(--bs-emphasis-color);
}

/* .thead{
  background-color: var(--bs-danger-rgb)!important;
  color: var(--bs-danger)!important;
} */

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

.table-shadow{
  box-shadow: -1px 1px 39px 8px rgba(0,0,0,0.14);
-webkit-box-shadow: -1px 1px 39px 8px rgba(0,0,0,0.14);
-moz-box-shadow: -1px 1px 39px 8px rgba(0,0,0,0.14)!important
}

.bg-keluar{
  background-color: #F4E1B3;
  color: #F4E1B3;
}

/* .bg-terkirim{
  background-color: ;
} */


.page-title{
  color: #5a5c69 ;
}

</style>