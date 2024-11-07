<template>
  <div class="wrapper">
    <Aside/>
    <div class="main">
      <div class="input-group mb-3">
        <h2>Master Barang</h2>
        <!-- <input type="search" placeholder="Cari stok barang" aria-describedby="button-addon5" class="form-control rounded-pill">
        <div class="input-group-append mx-3">
          <button id="button-addon5" type="submit" class="btn btn-danger"><i class="bi bi-search"></i>Search</button>
        </div> -->
        <!-- <button type="button" class="btn btn-danger rounded" data-bs-toggle="modal" data-bs-target="#exampleModal">
          Tambah Barang
        </button> -->
        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h1 class="modal-title fs-5" id="exampleModalLabel">Form Master Barang</h1>
                <!-- <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button> -->
              </div>
              <div class="modal-body">
                <form @submit.prevent="handleSubmit">
                  <div class="container-fluid">
                    <div class="row">
                      <div class="mb-3 col-md-7">
                        <label for="namaBarang" class="col-form-label">Nama Barang</label>
                        <input type="text" class="form-control" id="namaBarang" v-model="form.nama_barang" placeholder="Adrenaline">
                      </div>
                      <div class="mb-3 col-md-5">
                        <label for="tipeBan" class="col-form-label">Tipe Ban</label>
                        <input type="text" class="form-control" id="tipeBan" v-model="form.kategori" placeholder="Potenza">
                      </div>
                    </div>
                    <div class="mb-3">
                      <label label for="harga" class="col-form-label">Harga</label>
                      <input type="number" class="form-control" id="harga" v-model="form.harga" min="0" max="1000">
                    </div>
                    <div class="mb-3">
                      <label label for="stok" class="col-form-label">Stok</label>
                      <input type="number" class="form-control" id="stok" v-model="form.stok" min="0" max="1000">
                    </div>
                    <!-- <div class="mb-3">
                      <label for="tanggal" class="col-form-label">Tanggal</label>
                      <input type="date" class="form-control" id="tanggal" v-model="form.tanggal">
                    </div> -->
                  </div>
                </form>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-danger" data-bs-dismiss="modal" @click="closeEditModal">
                  <i class="bi bi-x-lg"></i><span class="mx-2">Batal</span>
                </button>
                <button type="button" class="btn btn-primary" @click="handleSubmit">
                  <i class="bi bi-check2"></i><span class="mx-2">Simpan</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="container-fluid">
        <div class="row">
          <div class="col-md-12 p-0">
            <button type="button" class="btn btn-danger rounded" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@getbootstrap">Tambah Barang</button>
          </div>
        </div>
      </div>

      <!-- Table Element -->
      <div class="card border table-shadow m-4 p-3">
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
                <th scope="col">Aksi</th>
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
                <td>
                  <button type="button" class="btn btn-sm btn-primary " data-bs-toggle="modal" data-bs-target="#editModal" @click="openEditModal(barang)"> <i class="bi bi-pencil-square"></i> <span>Edit</span> </button>
                  <!-- <button class="btn btn-sm btn-danger mx-2" @click="deleteBarang(barang.id_barang)"> <i class="bi bi-trash"></i> <span>Delete</span></button> -->
                  <button class="btn btn-sm btn-danger mx-2" @click="confirmDelete(barang.id_barang)"><i class="bi bi-trash"></i> <span>Delete</span></button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>

    <!-- <div class="modal fade" id="deleteModal" tabindex="-1" role="dialog" aria-labelledby="deleteModalLabel" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="deleteModalLabel">Confirm Deletion</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            Are you sure you want to delete this item?
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancel</button>
            <button type="button" class="btn btn-danger" @click="confirmDelete">Delete</button>
          </div>
        </div>
      </div> -->

    <div class="modal fade" id="editModal" tabindex="-1" aria-labelledby="editModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="editModalLabel">Form Edit Master Barang</h1>
            <!-- <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button> -->
          </div>
          <div class="modal-body">
            <form @submit.prevent="handleEditSubmit">
              <div class="container-fluid">
                <div class="row">
                  <div class="mb-3 col-md-7">
                    <label for="namaBarang" class="col-form-label">Nama Barang</label>
                    <input type="text" class="form-control" id="namaBarang" v-model="form.nama_barang" placeholder="Adrenaline">
                  </div>
                  <div class="mb-3 col-md-5">
                    <label for="tipeBan" class="col-form-label">Tipe Ban</label>
                    <input type="text" class="form-control" id="tipeBan" v-model="form.kategori" placeholder="Potenza">
                  </div>
                </div>
                <div class="mb-3">
                  <label for="harga" class="col-form-label">Harga</label>
                  <input type="number" class="form-control" id="harga" v-model="form.harga" min="0">
                </div>
                <div class="mb-3">
                  <label for="stok" class="col-form-label">Stok</label>
                  <input type="number" class="form-control" id="stok" v-model="form.stok" min="0" max="200">
                </div>
                <!-- <div class="mb-3">
                  <label for="tanggal" class="col-form-label">Tanggal</label>
                  <input type="date" class="form-control" id="tanggal" v-model="form.tanggal">
                </div> -->
              </div>
              <div class="modal-footer">
              <button type="button" class="btn btn-danger" data-bs-dismiss="modal">
                <i class="bi bi-x-lg"></i><span class="mx-2">Batal</span>
              </button>
              <button type="submit" class="btn btn-primary">
                <i class="bi bi-check2"></i><span class="mx-2">Simpan</span>
              </button>
            </div>
            </form>
          </div>
          <!-- <div class="modal-footer">
            <button type="button" class="btn btn-danger" data-bs-dismiss="modal">
              <i class="bi bi-x-lg"></i><span class="mx-2">Batal</span>
            </button>
            <button type="submit" class="btn btn-primary">
              <i class="bi bi-check2"></i><span class="mx-2">Simpan</span>
            </button>
          </div> -->
          
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Aside from '../components/Aside.vue'

import { ref, onMounted, nextTick } from 'vue';
import axios from 'axios'; 

// import $ from 'jquery';
// import 'datatables.net-bs5';

const barangList = ref([]);
const form = ref({
  nama_barang: '',
  kategori: '',
  harga: 0,
  stok: 0,
  // tanggal: '',
});

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

const deleteBarang = async (id_barang) => {
  try {
    await axios.delete(`/barang/delete/${id_barang}`);
    fetchData(); 
    console.log('Response:', response.data);
  } catch (error) {
    console.error('Error deleting data:', error);
  }
};

const confirmDelete = (id_barang) => {
  Swal.fire({
    position: "center",
    title: "Yakin ingin menghapus?",
    text: "Tindakan ini dapat menghapus data penting!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Ya, saya yakin ingin menghapus!"
  }).then((result) => {
    if (result.isConfirmed) {
      deleteBarang(id_barang).then(() => {
        Swal.fire({
          title: "Terhapus!",
          text: "Data Berhasil Terhapus",
          icon: "success"
        });
      });
    }
  });
};

const openEditModal = (item) => {
  form.value.id_barang = item.id_barang;
  form.value.nama_barang = item.nama_barang;
  form.value.kategori = item.kategori;
  form.value.harga = item.harga;
  form.value.stok = item.stok;
  // form.value.tanggal = item.tanggal;
  const editModal = new bootstrap.Modal(document.getElementById('editModal'));
  editModal.show();
};

const handleSubmit = async () => {
  try {
    const response = await axios.post('barang/insert', {
      nama_barang: form.value.nama_barang,
      kategori: form.value.kategori,
      harga: form.value.harga,
      stok: form.value.stok,
      // tanggal: form.value.tanggal,
    });
    console.log('Response:', response.data);
    fetchData(); 
    // exampleModal.hide();
    form.value.nama_barang = '';
    form.value.kategori = '';
    form.value.harga = 0;
    form.value.stok = 0;
    // form.value.tanggal = '';
    const exampleModal = bootstrap.Modal.getInstance(document.getElementById('exampleModal'));
    exampleModal.hide();
    Swal.fire({
      position: "center",
      icon: "success",
      title: response.data,
      showConfirmButton: false,
      timer: 1500
    });
  } catch (error) {
    console.error('Error submitting form:', error);
    Swal.fire({
      position: "top-end",
      icon: "error",
      title: error.response.data,
      showConfirmButton: false,
      timer: 1500
    });
  }
};

const handleEditSubmit = async () => {
  try {
    const response = await axios.patch(`barang/update/${form.value.id_barang}`, {
      nama_barang: form.value.nama_barang,
      kategori: form.value.kategori,
      harga: form.value.harga,
      stok: form.value.stok,
      // tanggal: form.value.tanggal,
    });
    console.log('Response:', response.data);
    fetchData(); 
    
    form.value.id_barang = '';
    form.value.nama_barang = '';
    form.value.kategori = '';
    form.value.harga = 0;
    form.value.stok = '';
    // form.value.tanggal = '';
    const editModal = bootstrap.Modal.getInstance(document.getElementById('editModal'));
    editModal.hide();
    Swal.fire({
      position: "middle",
      icon: "success",
      title: response.data,
      showConfirmButton: false,
      timer: 1500
    });
  } catch (error) {
    console.error('Error submitting form:', error);
    Swal.fire({
      position: "top-end",
      icon: "error",
      title: error.response.data,
      showConfirmButton: false,
      timer: 1500
    });
  }
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
  /* align-items: flex-start; */
  /* align-content: flex-start; */
  /* margin-top: 50px; */
}

.main {
    /* margin-top: 50px; */
    padding: 20px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    /* align-content: center */
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

.table-shadow{
  box-shadow: -1px 1px 39px 8px rgba(0,0,0,0.14);
-webkit-box-shadow: -1px 1px 39px 8px rgba(0,0,0,0.14);
-moz-box-shadow: -1px 1px 39px 8px rgba(0,0,0,0.14)!important
}

</style>