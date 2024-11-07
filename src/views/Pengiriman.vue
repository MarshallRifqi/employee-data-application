<template>
  <div class="wrapper">
    <Aside/>

    <div class="main">
      <div class="input-group mb-3">
        <h2>Pengiriman</h2>
        <!-- <input type="search" placeholder="Cari stok barang" aria-describedby="button-addon5" class="form-control rounded-pill">
        <div class="input-group-append mx-3">
          <button id="button-addon5" type="submit" class="btn btn-danger"><i class="bi bi-search"></i>Search</button>
        </div> -->
      </div>

      <!-- <div class="container-fluid">
        <div class="row">
          <div class="col-md-12 p-0">
            <qrcode-drop-zone @decode="onDecode">
              <div class="drop-zone">
                
                <p>Drag & drop an image or click to select a file</p>
              </div>
            </qrcode-drop-zone>
            <p>Result: {{ result }}</p>
          </div>
        </div>
      </div> -->

      <!-- <div class="riwayat">
        <a href="RiwayatPengiriman" class="btn btn-danger">
          <RouterLink :to="{ name: 'RiwayatPengiriman' }" class="tambah-button">Barang Terkirim</RouterLink>
        </a>
      </div> -->
      <!-- Table Element -->
      <div class="card border table-shadow m-4 p-3">
        <div class="card-header">
          <h5 class="card-title">List Pengiriman</h5>
        </div>
        <div class="card-body table-responsive">
          <table class="table table-light table-bordered"  id="example">
            <thead class="table-danger mt-5">
              <tr>
                <th scope="col">No</th>
                <th scope="col">Tanggal pengiriman</th>
                <th scope="col">Id Pengiriman</th>
                <th scope="col">Nama Ban</th>
                <th scope="col">Customer</th>
                <th scope="col">Status</th>
                <th scope="col">Aksi</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(pengiriman, index) in listPengiriman" :key="pengiriman.barang_keluar">
                <th scope="row">{{ index + 1 }}</th>
                <td>{{ formatTanggal(pengiriman.tanggal_pengiriman) }}</td>
                <td>{{ pengiriman.id_pengiriman }}</td>
                <td>{{ pengiriman.barang_keluar.barang.nama_barang }}</td>
                <td>{{ pengiriman.barang_keluar.pelanggan.nama_pelanggan }}</td>
                <td><span class="badge rounded-pill bg-warning">{{ pengiriman.status }}</span></td>
                <td>
                  <button class="btn btn-sm btn-success mx-2" @click="konfirmasiPengiriman(pengiriman.id_pengiriman)"><i class="bi bi-pencil-square"></i> <span>Konfirmasi</span></button>
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
import { ref, onMounted,  nextTick  } from 'vue';
import axios from 'axios';

import dayjs from 'dayjs';
//import { QrcodeDropZone } from 'vue-qrcode-reader';

const listPengiriman = ref([]);

const fetchData = async () => {
  try {
    const response = await axios.get('/pengiriman');
    listPengiriman.value = response.data.data;
    console.log('Response:', response.data);
    await nextTick();
    $('#example').DataTable();
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

const konfirmasi = async (id_pengiriman) => {
  try {
    const response = await axios.patch(`/pengiriman/konfirmasi/${id_pengiriman}`);
    fetchData();
    // listPengiriman.value = response.data.data;
    console.log('Response:', response.data);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

// Fungsi untuk memformat tanggal menggunakan dayjs
const formatTanggal = (dateString) => {
  return dayjs(dateString).format('DD MMMM YYYY');
};

const konfirmasiPengiriman = (id_pengiriman) => {
    Swal.fire({
      title: "Konfirmasi pengiriman",
      text: "Ingin menyelesaikan pengiriman?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Konfirmasi",
    }).then((result) => {
        if (result.isConfirmed) {
          konfirmasi(id_pengiriman).then(() => {
            Swal.fire({
              title: "Pengiriman Dikonfirmasi!",
              text: "Pengiriman barang telah selesai",
              icon: "success",
              timer: 5000,
          })
        });
        }
    });
  };

//   const result = ref(null);

// const onDecode = (decodedString) => {
//   result.value = decodedString;
// };

onMounted(fetchData);

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

/*.drop-zone {
  width: 300px;
  height: 200px;
  border: 2px dashed #ccc;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}*/

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

/* .tbl-no {
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
} */

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
    /* width: 50%; */
    /* margin-left: 300px; */
    /* margin-top: 20px; */
    font-size: 1rem;
    color: #5a5c69 ;
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
    padding: 30px;
    justify-content: flex-start;
    align-items: center;
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

.table-shadow{
  box-shadow: -1px 1px 39px 8px rgba(0,0,0,0.14);
-webkit-box-shadow: -1px 1px 39px 8px rgba(0,0,0,0.14);
-moz-box-shadow: -1px 1px 39px 8px rgba(0,0,0,0.14)!important
}

</style>