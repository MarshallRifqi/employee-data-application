<template>
  <div class="wrapper">
    <Aside/>
    <div class="main">
      <div class="input-group mb-3">
        <h2>Barang Masuk</h2>
        <!-- <input type="search" placeholder="Cari stok barang" aria-describedby="button-addon5" class="form-control rounded-pill">
        <div class="input-group-append mx-3">
          <button id="button-addon5" type="submit" class="btn btn-danger"><i class="bi bi-search"></i>Search</button>
        </div> -->
        <!-- <button type="button" class="btn btn-danger rounded" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@getbootstrap">Tambah Barang</button> -->
        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h1 class="modal-title fs-5" id="exampleModalLabel">Form Barang Masuk</h1>
              </div>
              <div class="modal-body">
                <form @submit.prevent="handleAddSubmit">
                  <div class="container-fluid">
                    <!-- <div class="row">
                      <div class="mb-3 col-md-12">
                        <label for="kode-barang" class="col-form-label">Masukan kode barang</label>
                        <div>Selected: {{ selected }}</div>
                        <br>
                        <select id="kode-barang" v-model="newBarang.id_barang">
                          <option disabled value="">Pilih kode barang</option>
                          <option>BRG-42632546</option>
                          <option>BRG-37735959</option>
                          <option>BRG-21962086</option>
                        </select>
                        <input type="text" class="form-control" id="kode-barang" v-model="newBarang.id_barang"> 
                      </div>
                    </div> -->
                    <div class="row">
                      <div class="mb-3 col-md-12">
                        <!-- <div>Selected: {{ selected }}</div> -->
                        <label for="kode-barang" class=" mb-3">Masukkan Nama Barang</label>
                        <br>
                        <select id="kode-barang" class="form-select mb-2" v-model="newBarang.id_barang">
                          <option disabled value="">Pilih barang</option>
                          <!-- <option value="{{barangMsk.id_barang}}" v-if="barangMsk.barang">{{ barangMsk.barang.nama_barang }}</option> -->
                          <option :value="barang.id_barang" v-for="(barang) in masterbarangList" :key="barang.id_barang">{{ barang.nama_barang }}</option>
                        </select>
                        <!-- <input type="text" class="form-control" id="kode-barang" v-model="newBarang.id_barang"> -->
                        <!-- <label for="kode-barang" class="col-form-label" readonly>Masukan kode barang</label> -->
                        <!-- <input type="text" class="form-control" id="kode-barang" v-model="newBarang.id_barang" readonly> -->
                      </div>
                    </div>
                    <div class="row">
                      <div class="mb-3 col-md-5">
                        <label for="tanggal" class="col-form-label">Tanggal Masuk</label>
                        <input type="date" class="form-control" id="tanggal" v-model="newBarang.tanggal_masuk">
                      </div>
                      <div class="mb-3 col-md-7">
                        <label for="stok" class="col-form-label">Jumlah masuk stok</label>
                        <input type="number" class="form-control" id="stok" v-model="newBarang.kuantitas" min="0" max="1000">
                      </div>
                    </div>
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
            </div>
          </div>
        </div>
      </div>
      <div class="container-fluid">
        <div class="row">
          <div class="col-md-12">
            <button type="button" class="btn btn-danger rounded" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@getbootstrap">Tambah Barang</button>
          </div>
        </div>
      </div>
      <!-- Table Element -->
      <div class="card border table-shadow m-4 p-3">

        <div class="card-header">
          <h5 class="card-title">List Barang Masuk</h5>
        </div>
        <div class="card-body ">
          <table class="table table-bordered" width="100%" id="example">
            <thead class="table-danger">
              <tr>
                <th scope="col">#</th>
                <th scope="col">Id barang masuk</th>
                <th scope="col">Kode Barang</th>
                <th scope="col">No DO</th>
                <th scope="col">Nama Ban</th>
                <th scope="col">Tipe Ban</th>
                <th scope="col">Tanggal Masuk</th>
                <th scope="col">Stok</th>
                <th scope="col">Aksi</th>
              </tr>
            </thead>
            <tbody class="danger">
              <tr v-for="(barangMsk, index) in barangList" :key="barangMsk.id_barang_masuk">
                <th scope="row">{{ index + 1 }}</th>
                <td>{{ barangMsk.id_barang_masuk }}</td>
                <td>{{ barangMsk.id_barang }}</td>
                <td>{{ barangMsk.no_do }}</td>
                <td>{{ barangMsk.barang.nama_barang }}</td>
                <td>{{ barangMsk.barang.kategori }}</td>
                <td>{{ formatTanggal(barangMsk.tanggal_masuk) }}</td>
                <td>{{ barangMsk.kuantitas }}</td>
                <td>
                  <!-- <button class="btn btn-sm btn-primary mx-2"><i class="bi bi-pencil-square"></i> <span>Edit</span></button> -->
                  <!-- <button type="button" class="btn btn-danger btn-sm " data-bs-toggle="modal" data-bs-target="#editModal" @click="openEditModal(barangMsk)">edit</button> -->
                  <button class="btn btn-sm btn-primary mx-2" @click="openEditModal(barangMsk)"><i class="bi bi-pencil-square"></i> <span>Edit</span></button>
                  <!-- <button class="btn btn-sm btn-danger mx-2" @click="deleteBarang(barangMsk.id_barang_masuk)"><i class="bi bi-trash"></i> <span>Delete</span></button> -->
                  <button class="btn btn-sm btn-danger mx-2" @click="confirmDelete(barangMsk.id_barang_masuk)"><i class="bi bi-trash"></i> <span>Delete</span></button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <div class="modal fade" id="editModal" tabindex="-1" aria-labelledby="editModalLabel" aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h1 class="modal-title fs-5" id="editLabel">Form Edit Barang Masuk</h1>
              </div>
              <div class="modal-body">
                <form @submit.prevent="handleEditSubmit">
                  <div class="container-fluid">
                    <div class="row">
                      <div class="mb-3 col-md-12">
                        <label for="kode-barang" class="col-form-label">Masukan kode barang</label>
                        <input type="text" class="form-control" id="kode-barang" v-model="editBarang.id_barang_masuk" readonly>
                      </div>
                    </div>
                    <div class="row">
                      <div class="mb-3 col-md-5">
                        <label for="tanggal" class="col-form-label">Tanggal Masuk</label>
                        <input type="date" class="form-control" id="tanggal" v-model="editBarang.tanggal_masuk">
                      </div>
                      <div class="mb-3 col-md-7">
                        <label for="stok" class="col-form-label">Jumlah masuk stok</label>
                        <input type="number" class="form-control" id="stok" v-model="editBarang.kuantitas" min="0" max="1000">
                      </div>
                    </div>
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
            </div>
          </div>
        </div>
  </div>
</template>

<script setup>
import Aside from '../components/Aside.vue'


import { ref, onMounted, nextTick } from 'vue';
import axios from 'axios'; 

import dayjs from 'dayjs';

// import $ from 'jquery';
// import 'datatables.net-bs5';
// import 'datatables.net-buttons-bs5';
// import 'datatables.net-buttons/js/buttons.html5.mjs';
// import 'datatables.net-buttons/js/buttons.print.mjs';

const barangList = ref([]);
const masterbarangList = ref([]);

const newBarang = ref({
  id_barang: '',
  tanggal_masuk: '',
  kuantitas: 0,
});

const editBarang = ref({
  id_barang_masuk: '',
  id_barang: '',
  tanggal_masuk: '',
  kuantitas: 0,
});




const fetchData = async () => {
  try {
    const response = await axios.get('/barang-masuk');
    barangList.value = response.data.barangMsk
    // barangList.value = response.data.barangMsk || [];
    console.log(response.data.barangMsk);
    await nextTick();
    $('#example').DataTable();
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

// Fungsi untuk memformat tanggal menggunakan dayjs
const formatTanggal = (dateString) => {
  return dayjs(dateString).format('DD MMMM YYYY');
};

const fetchDataModal = async () => {
  try {
    const response = await axios.get('/barang');
    masterbarangList.value = response.data.barang;
    // await nextTick();
    // $('#example').DataTable();
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};


const deleteBarang = async (id_barang_masuk) => {
  try {
    await axios.delete(`barang-masuk/delete/${id_barang_masuk}`);
    fetchData(); 
  } catch (error) {
    console.error('Error deleting data:', error);
  }
};

const confirmDelete = (id_barang_masuk) => {
  Swal.fire({
    title: "Yakin ingin menghapus?",
    text: "Tindakan ini dapat menghapus data penting!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Ya, saya ingin menghapus!"
  }).then((result) => {
    if (result.isConfirmed) {
      deleteBarang(id_barang_masuk).then(() => {
        Swal.fire({
          title: "Terhapus!",
          text: "Data berhasil terhapus.",
          icon: "success"
        });
      });
    }
  });
};


const handleAddSubmit = async () => {
  try {
    const response = await axios.post('barang-masuk/insert', {
      id_barang: newBarang.value.id_barang,
      tanggal_masuk: newBarang.value.tanggal_masuk,
      kuantitas: newBarang.value.kuantitas,
    });
    console.log('Response:', response.data);
    fetchData();
    
    newBarang.value.id_barang = '';
    newBarang.value.tanggal_masuk = '';
    newBarang.value.kuantitas = 0;
    const exampleModal = bootstrap.Modal.getInstance(document.getElementById('exampleModal'));
    exampleModal.hide();
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

const openEditModal = (barangMsk) => {
  editBarang.value.id_barang_masuk = barangMsk.id_barang_masuk;
  editBarang.value.id_barang = barangMsk.id_barang;
  editBarang.value.tanggal_masuk = barangMsk.tanggal_masuk;
  editBarang.value.kuantitas = barangMsk.kuantitas;
  const editModal = new bootstrap.Modal(document.getElementById('editModal'));
  editModal.show();
};

const handleEditSubmit = async () => {
  try {
    const response = await axios.patch(`barang-masuk/update/${editBarang.value.id_barang_masuk}`, {
      id_barang: editBarang.value.id_barang,
      tanggal_masuk: editBarang.value.tanggal_masuk,
      kuantitas: editBarang.value.kuantitas,
    });
    console.log('Response:', response.data);
    fetchData(); 
  
    editBarang.value.id_barang_masuk = '';
    editBarang.value.id_barang = '';
    editBarang.value.tanggal_masuk = '';
    editBarang.value.kuantitas = 0;
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
      title: response.data,
      showConfirmButton: false,
      timer: 1500
    });
  }
};




onMounted(fetchData);
onMounted(fetchDataModal);
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
    /*background: var(--bs-dark-bg-subtle);*/
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