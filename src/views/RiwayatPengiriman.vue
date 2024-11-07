<template>
  <div class="wrapper">
    <Aside/>

    <div class="main">
      <div class="input-group mb-3">
        <h1>Riwayat Pengiriman</h1>
        <!-- <input type="search" placeholder="Cari stok barang" aria-describedby="button-addon5" class="form-control rounded-pill">
        <div class="input-group-append mx-3">
          <button id="button-addon5" type="submit" class="btn btn-danger"><i class="bi bi-search"></i>Search</button>
        </div> -->
      </div>

      <!-- Table Element -->
      <div class="card border table-shadow m-4 p-3">
        <div class="card-header">
          <h5 class="card-title">Riyawat Pengiriman</h5>
        </div>
        <div class="card-body">
          <table class="table table-light table-bordered" id="example"> 
          <thead class="table-danger">
            <tr>
              <th scope="col">No</th>
              <th scope="col">Tanggal pengiriman</th>
              <th scope="col">Id Pengiriman</th>
              <th scope="col">Nama Ban</th>
              <th scope="col">Customer</th>
              <th scope="col">Status</th>
              <!-- <th scope="col">Aksi</th> -->
            </tr>
          </thead>
          <tbody>
            <tr v-for="(pengiriman, index) in listPengiriman" :key="pengiriman.barang_keluar">
              <th scope="row">{{ index + 1 }}</th>
              <td>{{ formatTanggal(pengiriman.tanggal_pengiriman) }}</td>
              <td>{{ pengiriman.id_pengiriman }}</td>
              <td>{{ pengiriman.barang_keluar.barang.nama_barang }}</td>
              <td>{{ pengiriman.barang_keluar.pelanggan.nama_pelanggan }}</td>
              <!-- <td>{{ pengiriman.status }}</td> -->
              <!-- <td>{{ pengiriman.kuantitas }}</td> -->
              <td><span class="badge rounded-pill bg-success">{{ pengiriman.status }}</span></td>
              <!-- <td>
                <button class="btn btn-sm btn-primary mx-2"><i class="bi bi-pencil-square"></i> <span>Detail</span></button>
              </td> -->
            </tr>
          </tbody>
        </table>
        </div>
      </div>
      <div class="modal fade" id="detailModal" tabindex="-1" aria-labelledby="detailModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-xl">
        <div class="modal-content">
          <div class="modal-header">
            <!-- <div class="card-header"> -->
              <div class="container-fluid">
                <div class="row d-flex align-items-center justify-content-between mx-5">
                  <div class="col-auto mx-4">
                    <img src="../assets/nusantara_team__update.png" class="logo-nusantara" alt="">
                  </div>
                  <div class="col-auto mx-4">
                    <h3 class="modal-title fs-7" id="editLabel">Detail Pengiriman</h3>
                  </div>
                </div>
              </div>
            <!-- </div> -->
          </div>
          <div class="modal-body">
            <form>
              <div class="modal-body">
                <div class="container-fluid">
                  <div class="row mx-auto mb-4">
                    <div class="col-md-4 mx-auto">
                      <p>ID Pengiriman: <strong>11234312</strong></p>
                      <p>Jumlah Barang: <strong>100</strong></p>
                      <p>Tanggal Pengiriman: <strong>29-06-2024</strong></p>
                    </div>
                    <div class="col-md-4">
                      <img src="https://via.placeholder.com/150" alt="QR Code" class="img-fluid">
                    </div>
                  </div>
                  <div class="row mx-auto mt-5">
                    <div class="col-md-4 mx-auto">
                      <p><strong>Kepada:</strong></p>
                      <p><strong>Nama Penerima</strong></p>
                      <p>Alamat Customer</p>
                      <p>No Telepon Customer</p>
                    </div>
                    <div class="col-md-4">
                      <p><strong>Dari:</strong></p>
                      <p><strong>Nusantara Warehouse</strong></p>
                      <p>Alamat Perusahaan</p>
                      <p>No Telepon Customer</p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="modal-footer">
                <div class="col mx-auto" align="center">
                  <button type="submit" class="btn btn-primary">
                    <i class="bi bi-printer"></i><span class="mx-2" @click="handleEditSubmit">Print Label</span>
                  </button>
                </div>
            </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    </div>
    <!-- <div class="modal fade" id="detailModal" tabindex="-1" aria-labelledby="detailModalLabel" aria-hidden="true">
      ...
    </div> -->
  </div>

</template>


<script setup>
import Aside from '../components/Aside.vue'
// import EditModal from '../components/EditModal.vue'
import { ref, onMounted, nextTick  } from 'vue';
import axios from 'axios';
import dayjs from 'dayjs';

const opendetailModal = () => {
const detailModal = new bootstrap.Modal(document.getElementById('detailModal'));
detailModal.show();
};


const listPengiriman = ref([]);

const fetchData = async () => {
try {
  const response = await axios.get('/pengiriman/riwayat-pengiriman');
  listPengiriman.value = response.data.data;
  console.log('Response:', response.data);
  await nextTick();
  $('#example').DataTable();
} catch (error) {
  console.error('Error fetching data:', error);
}
};

const formatTanggal = (dateString) => {
  return dayjs(dateString).format('DD MMMM YYYY');
};

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
    padding: 20px;
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