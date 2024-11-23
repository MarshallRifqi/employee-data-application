<template>
  <div class="wrapper">
    <Aside/>
    <div class="main">
      <div class="input-group mb-3">
        <h2>Customer</h2>
        <!-- <input type="search" placeholder="Cari stok barang" aria-describedby="button-addon5" class="form-control rounded-pill">
        <div class="input-group-append mx-3">
          <button id="button-addon5" type="submit" class="btn btn-danger"><i class="bi bi-search"></i>Search</button>
        </div> -->
        <!-- <button type="button" class="btn btn-danger rounded" data-bs-toggle="modal" data-bs-target="#exampleModal">
          Tambah Customer
        </button> -->
        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h1 class="modal-title fs-5" id="exampleModalLabel">Form Customer</h1>
                <!-- <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button> -->
              </div>
              <div class="modal-body">
                <form @submit.prevent="handleAddSubmit">
                  <div class="container-fluid">
                    <div class="row">
                      <div class="mb-3 col-md-12">
                        <label for="namauser" class="col-form-label">Nama User</label>
                        <input type="text" class="form-control" id="namauser" v-model="newUser.nama_pelanggan" placeholder="John Doe">
                      </div>
                      <div class="mb-3 col-md-12">
                        <label for="alamat" class="col-form-label">Alamat</label>
                        <input type="text" class="form-control" id="alamat" v-model="newUser.alamat" placeholder="Jl. Summarecon Bekasi">
                      </div>
                    </div>
                    <div class="mb-3">
                      <label label for="email" class="col-form-label">Email</label>
                      <input type="text" class="form-control" id="email" v-model="newUser.email" min="0" max="200" placeholder="user@gmail.com">
                    </div>
                    <div class="mb-3">
                      <label label for="notelp" class="col-form-label">No Telepon</label>
                      <input type="text" class="form-control" id="notelp" v-model="newUser.no_telepon" min="0" max="200" placeholder="081******">
                    </div>
                    <!-- <div class="mb-3">
                      <label for="tanggal" class="col-form-label">Tanggal</label>
                      <input type="date" class="form-control" id="tanggal" v-model="form.tanggal">
                    </div> -->
                    <div class="modal-footer">
                      <button type="button" class="btn btn-danger" data-bs-dismiss="modal">
                        <i class="bi bi-x-lg"></i><span class="mx-2">Batal</span>
                      </button>
                      <button type="submit" class="btn btn-primary" data-bs-dismiss="modal">
                        <i class="bi bi-check2"></i><span class="mx-2">Simpan</span>
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- modal detail -->
      <div class="modal fade" id="detailKaryawan" tabindex="-1" aria-labelledby="detailKaryawanModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-lg">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="detailKaryawanModalLabel">Detail Data Karyawan</h1>
      </div>
      <div class="modal-body p-5">
        <!-- <table id="" class="table-bordered p-5" >
          <caption>First Way</caption>
            <tr>
              <th class="row fw-semibold mb-3"> Nama Lengkap :</th>
              <td>data</td>
            </tr>
            <tr>
              <th class="row fw-semibold mb-3"> NIK :</th>
              <td>data</td>
            </tr>
            <tr>
              <th class="row fw-semibold mb-3"> Email :</th>
              <td>data</td>
            </tr>
            <tr>
              <th class="row fw-semibold mb-3"> No Handphone :</th>
              <td>data</td>
            </tr>
            <tr>
              <th class="row fw-semibold mb-3"> Jabatan :</th>
              <td>data</td>
            </tr>
            <tr>
              <th class="row fw-semibold mb-3"> Job Functio :</th>
              <td>data</td>
            </tr>
            <tr>
              <th class="row fw-semibold mb-3"> Level Jabatan :</th>
              <td>data</td>
            </tr>
            <tr>
              <th class="row fw-semibold mb-3"> Tanggal Bergabung :</th>
              <td>data</td>
            </tr>
            <tr>
              <th class="row fw-semibold mb-3"> Tanggal Menjabat :</th>
              <td>data</td>
            </tr>
            <tr>
              <th class="row fw-semibold mb-3"> NIP :</th>
              <td>data</td>
            </tr>
            <tr>
              <th class="row fw-semibold mb-3"> NIP :</th>
              <td>data</td>
            </tr>
            <tr>
              <th class="row fw-semibold mb-3"> Status Kepegawaian :</th>
              <td>data</td>
            </tr>
            <tr>
              <th class="row fw-semibold mb-3"> TTL :</th>
              <td>data</td>
            </tr>
            <tr>
              <th class="row fw-semibold mb-3"> Unit Kerja :</th>
              <td>data</td>
            </tr>
            <tr>
              <th class="row fw-semibold mb-3"> Status :</th>
              <td>data</td>
            </tr>
            <tr>
              <th class="row fw-semibold mb-3"> Golongan :</th>
              <td>data</td>
            </tr>
            <tr>
              <th class="row fw-semibold mb-3"> TMT Job Title :</th>
              <td>data</td>
            </tr>
            <tr>
              <th class="row fw-semibold mb-3"> No/Th SK Terakhir :</th>
              <td>data</td>
            </tr>
            <tr>
              <th class="row fw-semibold mb-3"> Pendidikan :</th>
              <td>data</td>
            </tr>
            <tr>
              <th class="row fw-semibold mb-3"> No BPJS :</th>
              <td>data</td>
            </tr>
            <tr>
              <th class="row fw-semibold mb-3"> No Jamsostek :</th>
              <td>data</td>
            </tr>
            <tr>
              <th class="row fw-semibold mb-3"> Pensiun :</th>
              <td>data</td>
            </tr>
            <tr>
              <th class="row fw-semibold mb-3"> Jumlah Anggota Keluarga :</th>
              <td>data</td>
            </tr>
            <tr>
              <th class="row fw-semibold mb-3"> Agama :</th>
              <td>data</td>
            </tr>
            <tr>
              <th class="row fw-semibold mb-3"> Alamat :</th>
              <td>data</td>
            </tr>
            <tr>
              <th class="row fw-semibold mb-3"> Serikat Pekerja :</th>
              <td>data</td>
            </tr>
        </table> -->
        <table class="table table-bordered">
      <!-- <thead>
        <tr>
          <th>Category</th>
          <th>Item 1</th>
          <th>Item 2</th>
          <th>Item 3</th>
        </tr>
      </thead> -->
      <tbody>
        <tr>
          <th scope="row">Row 1</th>
          <td>Data 1.1</td>
          <!-- <td>Data 1.2</td>
          <td>Data 1.3</td> -->
        </tr>
        <tr>
          <th scope="row">Row 2</th>
          <td>Data 2.1</td>
          <td>Data 2.2</td>
          <td>Data 2.3</td>
        </tr>
        <tr>
          <th scope="row">Row 3</th>
          <td>Data 3.1</td>
          <td>Data 3.2</td>
          <td>Data 3.3</td>
        </tr>
      </tbody>
    </table>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-danger" data-bs-dismiss="modal">
          <i class="bi bi-x-lg"></i><span> Tututp</span></button>
        <button type="button" class="btn btn-primary">
          <i class="bi bi-check2"></i><span class="mx-2"> Simpan</span></button>
      </div>
    </div>
  </div>
</div>
      <!-- end of modal detail -->

      <div class="container-fluid">
        <div class="row">
          <div class="col-md-12 p-0">
            <button type="button" class="btn btn-danger rounded " data-bs-toggle="modal" data-bs-target="#exampleModal">Tambah Customer</button>   
          </div>
        </div>
      </div>

      <!-- Table Element mx-5 p-2 -->
      <div class="card border table-shadow m-4 p-3">
        <div class="card-header">
          <h5 class="card-title">List Barang Keluar</h5>
        </div>
        <div class="card-body table-responsive">
          <table class="table table-light table-bordered" id="example">
            <thead class="table-danger mt-5">
              <tr>
                <th scope="col">#</th>
                <th scope="col">Id pelanggan</th>
                <th scope="col">Nama Pelanggan</th>
                <th scope="col">Alamat</th>
                <th scope="col">Email</th>
                <th scope="col">No Telepon</th>
                <!-- <th scope="col">Stok</th> -->
                <th scope="col">Aksi</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(pelanggan, index) in pelangganList" :key="pelanggan.id_pelanggan">
                <th scope="row">{{ index + 1 }}</th>
                <td>{{ pelanggan.id_pelanggan }}</td>
                <td>{{ pelanggan.nama_pelanggan }}</td>
                <td>{{ pelanggan.alamat }}</td>
                <td>{{ pelanggan.email }}</td>
                <td>{{ pelanggan.no_telpon }}</td>
                <!-- <td>{{ barangMsk.kuantitas }}</td> -->
                <td>
                  <!-- <button class="btn btn-sm btn-primary mx-2"><i class="bi bi-pencil-square"></i> <span>Edit</span></button> -->
                  <!-- <button type="button" class="btn btn-danger btn-sm " data-bs-toggle="modal" data-bs-target="#editModal" @click="openEditModal(barangMsk)">edit</button> -->
                  <button class="btn btn-sm btn-primary mx-2" @click="openEditModal(pelanggan)"><i class="bi bi-pencil-square"></i> <span>Edit</span></button>
                  <!-- <button class="btn btn-sm btn-danger mx-2" @click="deleteBarang(barangMsk.id_barang_masuk)"><i class="bi bi-trash"></i> <span>Delete</span></button> -->
                  <button class="btn btn-sm btn-danger mx-2" @click="confirmDelete(pelanggan.id_pelanggan)"><i class="bi bi-trash"></i> <span>Delete</span></button>
                  <button class="btn btn-sm btn-danger mx-2" data-bs-toggle="modal" data-bs-target="#detailKaryawan"><i class="bi bi-person-vcard"></i><span class="ms-1">Detail</span></button>
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
                <h1 class="modal-title fs-5" id="editLabel">Form Edit Customer</h1>
              </div>
              <div class="modal-body">
                <form @submit.prevent="handleEditSubmit">
                  <div class="container-fluid">
                    <div class="row">
                      <div class="mb-3 col-md-12">
                        <label for="kode-barang" class="col-form-label">Id User</label>
                        <input type="text" class="form-control" id="kode-barang" v-model="editUser.id_pelanggan" readonly>
                      </div>
                    </div>
                    <div class="row">
                      <div class="mb-3 col-md-5">
                        <label for="tanggal" class="col-form-label">Nama</label>
                        <input type="text" class="form-control" id="tanggal" v-model="editUser.nama_pelanggan">
                      </div>
                      <div class="mb-3 col-md-7">
                        <label for="stok" class="col-form-label">Alamat</label>
                        <input type="text" class="form-control" id="stok" v-model="editUser.alamat" min="0" max="200">
                      </div>
                    </div>
                    <div class="row">
                      <div class="mb-3 col-md-5">
                        <label for="tanggal" class="col-form-label">Email</label>
                        <input type="text" class="form-control" id="tanggal" v-model="editUser.email">
                      </div>
                      <div class="mb-3 col-md-7">
                        <label for="stok" class="col-form-label">No Telepon</label>
                        <input type="text" class="form-control" id="stok" v-model="editUser.no_telpon" >
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

const pelangganList = ref([]);
// const BarangList = ref([]);

// const newBarang = ref({
//   id_barang: '',
//   tanggal_masuk: '',
//   kuantitas: 0,
// });
const newUser = ref({
  id_pelanggan: '',
  nama_pelanggan: '', 
  alamat: '',
  email: '',
  no_telepon: '' 
});

// const editBarang = ref({
//   id_barang_masuk: '',
//   id_barang: '',
//   tanggal_masuk: '',
//   kuantitas: 0,
// });
const editUser = ref({
  id_pelanggan: '',
  nama_pelanggan: '', 
  alamat: '',
  email: '',
  no_telpon: '' 
});



const fetchData = async () => {
  try {
    const response = await axios.get('/pelanggan');
    pelangganList.value = response.data.pelanggan;
    await nextTick();
    $('#example').DataTable();
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

const deleteCustomer = async (id_pelanggan) => {
  try {
    await axios.delete(`pelanggan/delete/${id_pelanggan}`);
    fetchData(); 
  } catch (error) {
    console.error('Error deleting data:', error);
  }
};

const confirmDelete = (id_pelanggan) => {
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
      deleteCustomer(id_pelanggan).then(() => {
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
    const response = await axios.post('pelanggan/insert', {
      id_pelanggan: newUser.value.id_pelanggan,
      nama_pelanggan: newUser.value.nama_pelanggan, 
      alamat: newUser.value.alamat,
      email: newUser.value.email,
      no_telepon: newUser.value.no_telepon 
    });
    console.log('Response:', response.data);
    fetchData();
    newUser.value.id_pelanggan = '',
    newUser.value.nama_pelanggan = '', 
    newUser.value.alamat = '',
    newUser.value.email = '',
    newUser.value.no_telepon = ''; 

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

const openEditModal = (pelanggan) => {
  editUser.value.id_pelanggan = pelanggan.id_pelanggan;
  editUser.value.nama_pelanggan = pelanggan.nama_pelanggan;
  editUser.value.alamat = pelanggan.alamat;
  editUser.value.email = pelanggan.email;
  editUser.value.no_telpon  = pelanggan.no_telpon;

  const editModal = new bootstrap.Modal(document.getElementById('editModal'));
  editModal.show();
};

const handleEditSubmit = async () => {
  try {
    const response = await axios.put(`pelanggan/update/${editUser.value.id_pelanggan}`, {

      id_pelanggan: editUser.value.id_pelanggan,
      nama_pelanggan: editUser.value.nama_pelanggan,
      alamat: editUser.value.alamat,
      email: editUser.value.email,
      no_telpon: editUser.value.no_telpon,
    });
    console.log('Response:', response.data);
    fetchData(); 
  
    // editUser.value.tanggal_masuk = '';
    editUser.value.id_pelanggan = '';
    editUser.value.nama_pelanggan = '';
    editUser.value.alamat = '';
    editUser.value.email = '';
    editUser.value.no_telpon = '';
    const editModal = bootstrap.Modal.getInstance(document.getElementById('editModal'));
    editModal.hide();
    Swal.fire({
      position: "middle",
      icon: "success",
      title: "Data berhasil tersimpan",
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