<template>
  <div class="wrapper">
    <Aside/>
    <div class="main">
      <div class="input-group mb-3">
        <h2>Barang Keluar</h2>
        <!-- <input type="search" placeholder="Cari stok barang" aria-describedby="button-addon5" class="form-control rounded-pill">
        <div class="input-group-append mx-3">
          <button id="button-addon5" type="submit" class="btn btn-danger"><i class="bi bi-search"></i>Search</button>
        </div> -->
        <!-- <button type="button" class="btn btn-danger rounded" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@getbootstrap">Tambah Barang</button> -->
        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog modal-xl">
            <div class="modal-content">
              <div class="modal-header">
                <h1 class="modal-title fs-5" id="exampleModalLabel">Form Barang Keluar</h1>
              </div>
              <div class="modal-body">
                <form @submit.prevent="handleAddSubmit">
                  <div class="container-fluid">
                    <div class="row">
                      <div class="col-md-6">
                        <div class="row">
                          <div class="col-md-6">
                            <!-- <div>Selected: {{ selected }}</div> -->
                            <label for="kode-barang" class="col-form-label">Pilih Barang</label>
                            <select id="kode-barang" class="form-select mb-2" v-model="newBarang.id_barang">
                              <option disabled value="">Pilih barang</option>
                              <option :value="barang.id_barang" v-for="(barang) in masterbarangList" :key="barang.id_barang">{{ barang.nama_barang }}</option>
                            </select>
                          </div>
                          <div class="mb-3 col-md-6">
                            <label for="kode-barang" class="col-form-label">Id Barang</label>
                            <input type="text" class="form-control" id="kode-barang" v-model="newBarang.id_barang" readonly placeholder="BRG-00000000">
                          </div>
                        </div>
                        <div class="row">
                          <div class="col-md-6">
                            <label for="kode-pelanggan" class="col-form-label">Pilih Customer</label>
                            <select id="kode-pelanggan" class="form-select mb-2" v-model="newBarang.id_pelanggan">
                              <option disabled value="">Nama Pelanggan</option>
                              <option v-for="(pelanggan) in pelangganList" :key="pelanggan.id_pelanggan" :value="pelanggan.id_pelanggan">{{ pelanggan.nama_pelanggan }}</option>
                              <!-- <option value="#">Customer 2</option> -->
                              <!-- <option value="#">Customer 3</option> -->
                            </select>
                          </div>
                          <div class="col-md-6">
                            <label for="alamat" class="col-form-label">Id Pelanggan</label>
                            <input type="text" class="form-control" id="alamat" v-model="newBarang.id_pelanggan" readonly>
                          </div>
                        </div>
                        <!-- <div class="row">
                          <div class="mb-3 col-md-12">
                            <label for="alamat" class="col-form-label">Alamat</label>
                            <input type="text" class="form-control" id="alamat" placeholder="Jalan haji daud No.70" readonly>
                          </div>
                        </div> -->
                      </div>
                      <div class="col-md-6">
                        <div class="row">
                          <!-- <div class="mb-3 col-md-6">
                            <label for="alamat" class="col-form-label">Stok Master Barang</label>
                            <input type="number" class="form-control" id="alamat" placeholder="200" readonly>
                            </div> -->
                            <div class="mb-3 col-md-12">
                              <label for="stok" class="col-form-label">Jumlah Barang Keluar</label>
                              <input type="number" class="form-control" id="stok" min="0" v-model="newBarang.kuantitas">
                          </div>
                        </div>
                        <!-- <div class="row">
                          <div class="mb-3 col-md-12">
                            <label for="stok" class="col-form-label">Keterangan</label>
                            <input type="text" class="form-control" id="stok">
                          </div>
                        </div> -->
                        <div class="row">
                          <div class="mb-3 col-md-12">
                            <label for="tanggal" class="col-form-label">Tanggal keluar</label>
                            <input type="date" class="form-control" id="tanggal" v-model="newBarang.tanggal_keluar">
                          </div>
                        </div>
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
          <div class="col-md-12 p-0">
            <button type="button" class="btn btn-danger rounded" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@getbootstrap">Tambah Barang</button>
          </div>
        </div>
      </div>


      <!-- Table Element -->
      <div class="card border table-shadow m-4 p-3">
        <div class="card-header">
          <h5 class="card-title">List Barang Keluar</h5>
        </div>
        <div class="card-body table-responsive">
          <table class="table table-light table-bordered" id="example">
            <thead class="table-danger mt-5">
              <tr>
                <th scope="col">No</th>
                <th scope="col">Id Barang Keluar</th>
                <th scope="col">Id Barang</th>
                <th scope="col">Id Pelanggan</th>
                <th scope="col">Kuantitas</th>
                <th scope="col">Tanggal Keluar</th>
                <th scope="col">Total Harga</th>
                <th class="text-center" scope="col">Aksi</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(barangKlr, index) in barangList" :key="barangKlr.id_barang_keluar">
                <th scope="row">{{ index + 1 }}</th>
                <td>{{ barangKlr.id_barang_keluar }}</td>
                <td>{{ barangKlr.id_barang }}</td>
                <td>{{ barangKlr.id_pelanggan }}</td>
                <td>{{ barangKlr.kuantitas }}</td>
                <td>{{ formatTanggal(barangKlr.tanggal_keluar) }}</td>
                <td>{{ barangKlr.total_harga }}</td>
                <td>
                  <!-- <button class="btn btn-sm btn-primary mx-2"><i class="bi bi-pencil-square"></i> <span>Edit</span></button> -->
                  <!-- <button type="button" class="btn btn-danger btn-sm " data-bs-toggle="modal" data-bs-target="#editModal" @click="openEditModal(barangMsk)">edit</button> -->
                  <button class="btn btn-sm btn-primary mx-2" @click="openEditModal(barangKlr)"><i class="bi bi-pencil-square"></i> <span>Edit</span></button>
                  <!-- <button class="btn btn-sm btn-danger mx-2" @click="deleteBarang(barangMsk.id_barang_masuk)"><i class="bi bi-trash"></i> <span>Delete</span></button> -->
                  <button class="btn btn-sm btn-danger mx-2" @click="confirmDelete(barangKlr.id_barang_keluar)"><i class="bi bi-trash"></i> <span>Delete</span></button>
                  <button class="btn btn-sm btn-primary mx-2" @click="confirmKirimBarang(barangKlr.id_barang_keluar)"><i class="bi bi-truck"></i> <span>Kirim</span></button>
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
            <h1 class="modal-title fs-5" id="editLabel">Form Edit Barang Keluar</h1>
          </div>
          <div class="modal-body">
            <form @submit.prevent="handleEditSubmit">
              <div class="container-fluid">
                <div class="row">
                  <div class="mb-3 col-md-12">
                    <label for="barang-keluar" class="col-form-label">Id Barang Keluar</label>
                    <input type="text" class="form-control" id="barang-keluar" v-model="newBarang.id_barang_keluar" readonly>
                  </div>
                </div>
                <div class="row">
                  <div class="mb-3 col-md-6">
                    <label for="id-barang" class="col-form-label">Id Barang</label>
                    <input type="text" class="form-control" id="id-barang" v-model="newBarang.id_barang" readonly>
                  </div>
                  <div class="mb-3 col-md-6">
                    <label for="pelanggan" class="col-form-label">Id Pelanggan</label>
                    <input type="text" class="form-control" id="pelanggan" v-model="newBarang.id_pelanggan" readonly>
                  </div>
                </div>
                <!-- <div class="row">
                </div> -->
                <div class="row">
                  <div class="mb-3 col-md-6">
                    <label for="stok-edit" class="col-form-label">Jumlah Barang keluar</label>
                    <input type="number" class="form-control" id="stok-edit" v-model="newBarang.kuantitas">
                    </div>
                      <div class="mb-3 col-md-6">
                        <label for="tanggal" class="col-form-label">Tanggal Keluar</label>
                        <input type="date" class="form-control" id="tanggal" v-model="newBarang.tanggal_keluar">
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
  

    <!-- DETAIL MODAL -->
    <div id="app">
       <div class="modal fade  modal-fullscreen" id="detailModal" tabindex="-1" aria-labelledby="detailModalLabel" aria-hidden="true">
           <div class="modal-dialog modal-fullscreen">
             <div class="modal-content" id="printLabel">
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
                         <div class="col-md-4 mx-auto" >
                            <p>ID Barang: <strong>{{ barangListId.id_barang_keluar }}</strong></p>
                            <p v-if="barangListId.Pengiriman">ID Pengiriman: <strong>{{ barangListId.Pengiriman.id_pengiriman }}</strong></p>
                           <p>Jumlah Barang dikirim: <strong>{{ barangListId.kuantitas }}</strong></p>
                         </div>
                         <div class="col-md-4">
                           <qrcode-vue v-if="barangListId.Pengiriman" :value="barangListId.Pengiriman.id_pengiriman" :size="150"></qrcode-vue>
                         </div>
                       </div>
                       <div class="row mx-auto mt-5">
                         <div class="col-md-4 mx-auto">
                           <p class="mb-3"><strong>Kepada:</strong></p>
                           <p class="mb-2"  v-if="barangListId.pelanggan"><strong>{{ barangListId.pelanggan.nama_pelanggan}}</strong></p>
                           <p class="mb-2" v-if="barangListId.pelanggan">{{ barangListId.pelanggan.alamat}}</p>
                           <p class="mb-2" v-if="barangListId.pelanggan">{{ barangListId.pelanggan.no_telpon}}</p>
                         </div>
                         <div class="col-md-4">
                           <p class="mb-3"><strong>Dari:</strong></p>
                           <p class="mb-2"><strong>Nusantara Warehouse</strong></p>
                           <p class="mb-2">Jalan Saluyu Indah XIII No.52. Bandung, Jawa Barat</p>
                         </div>
                       </div>
                     </div>
                   </div>
                   <div class="modal-footer">
                     <div class="col mx-auto" align="center">
                       <button type="submit" class="btn btn-primary" @click="printBtn()">
                         <i class="bi bi-printer"></i><span class="mx-2">Print Label</span>
                       </button>
                     </div>
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

import { defineProps } from 'vue';
import QrcodeVue from 'qrcode.vue';

import dayjs from 'dayjs';

// const opendetailModal = () => {
//   const detailModal = new bootstrap.Modal(document.getElementById('detailModal'));
//   detailModal.show();
//   };

const barangList = ref([]);
const masterbarangList = ref([]);
const pelangganList = ref([]);

const newBarang = ref({
  // id_barang_masuk: '',
  id_barang: '',
  id_pelanggan: '',
  tanggal_masuk: '',
  kuantitas: 0,
  tanggal_keluar: ''
});

// const editBarang = ref({
//   id_barang_masuk: '',
//   id_barang: '',
//   tanggal_masuk: '',
//   kuantitas: 0,
// });

const props = defineProps({
  barangListId: {
    type: Object,
    required: true
  }
});



const fetchData = async () => {
  try {
    const response = await axios.get('/barang-keluar');
    barangList.value = response.data.barangKlr;
    await nextTick();
    $('#example').DataTable();
  } catch (error) {
    console.error('Error fetching data:', error);
  }
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

const fetchDataModalCus = async () => {
  try {
    const response = await axios.get('/pelanggan');
    pelangganList.value = response.data.pelanggan;
    // await nextTick();
    // $('#example').DataTable();
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

const deleteBarang = async (id_barang_keluar) => {
  try {
    await axios.delete(`barang-keluar/delete/${id_barang_keluar}`);
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
    const response = await axios.post('barang-keluar/insert', {
      id_barang: newBarang.value.id_barang,
      id_pelanggan: newBarang.value.id_pelanggan,
      kuantitas: newBarang.value.kuantitas,
      tanggal_keluar: newBarang.value.tanggal_keluar,

    });
    console.log('Response:', response.data);
    fetchData();
    
    newBarang.value.id_barang = '';
    newBarang.value.id_pelanggan= '';
    newBarang.value.kuantitas= '';
    newBarang.value.tanggal_keluar = '';
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
      timer: 3000
    });
  }
};
// const handleAddSubmit = async () => {
//   try {
//     const response = await axios.post('barang-masuk/insert', {
//       id_barang: newBarang.value.id_barang,
//       tanggal_masuk: newBarang.value.tanggal_masuk,
//       kuantitas: newBarang.value.kuantitas,
//     });
//     console.log('Response:', response.data);
//     fetchData();
    
//     newBarang.value.id_barang = '';
//     newBarang.value.tanggal_masuk = '';
//     newBarang.value.kuantitas = 0;
//     const exampleModal = bootstrap.Modal.getInstance(document.getElementById('exampleModal'));
//     exampleModal.hide();
//     Swal.fire({
//       position: "middle",
//       icon: "success",
//       title: "Data berhasil tersimpan",
//       showConfirmButton: false,
//       timer: 1500
//     });
//   } catch (error) {
//     console.error('Error submitting form:', error);
//   }
// };

const openEditModal = (barangKlr) => {
  newBarang.value.id_barang_keluar = barangKlr.id_barang_keluar;
  newBarang.value.id_barang = barangKlr.id_barang;
  newBarang.value.id_pelanggan= barangKlr.id_pelanggan;
  newBarang.value.kuantitas = barangKlr.kuantitas;
  newBarang.value.tanggal_keluar = barangKlr.tanggal_keluar;
  const editModal = new bootstrap.Modal(document.getElementById('editModal'));
  editModal.show();
};
// const openEditModal = (barangMsk) => {
//   editBarang.value.id_barang_masuk = barangMsk.id_barang_masuk;
//   editBarang.value.id_barang = barangMsk.id_barang;
//   editBarang.value.tanggal_masuk = barangMsk.tanggal_masuk;
//   editBarang.value.kuantitas = barangMsk.kuantitas;
//   const editModal = new bootstrap.Modal(document.getElementById('editModal'));
//   editModal.show();
// };

const formatTanggal = (dateString) => {
  return dayjs(dateString).format('DD MMMM YYYY');
};


const handleEditSubmit = async () => {
  try {
    const response = await axios.put(`barang-keluar/update/${newBarang.value.id_barang_keluar}`, {
      // id_barang: editBarang.value.id_barang,
      id_barang_keluar: newBarang.value.id_barang_keluar,
      id_barang: newBarang.value.id_barang,
      id_pelanggan: newBarang.value.id_pelanggan,
      kuantitas: newBarang.value.kuantitas,
      tanggal_keluar: newBarang.value.tanggal_keluar,
    });
    console.log('Response:', response.data);
    fetchData(); 
  
    newBarang.value.id_barang_keluar = '';
    newBarang.value.id_barang = '';
    newBarang.value.id_pelanggan = '';
    newBarang.value.kuantitas = 0;
    newBarang.value.tanggal_keluar = '';
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
// const handleEditSubmit = async () => {
//   try {
//     const response = await axios.patch(`barang-masuk/update/${editBarang.value.id_barang_masuk}`, {
//       id_barang: editBarang.value.id_barang,
//       tanggal_masuk: editBarang.value.tanggal_masuk,
//       kuantitas: editBarang.value.kuantitas,
//     });
//     console.log('Response:', response.data);
//     fetchData(); 
  
//     editBarang.value.id_barang_masuk = '';
//     editBarang.value.id_barang = '';
//     editBarang.value.tanggal_masuk = '';
//     editBarang.value.kuantitas = 0;
//     const editModal = bootstrap.Modal.getInstance(document.getElementById('editModal'));
//     editModal.hide();
//     Swal.fire({
//       position: "middle",
//       icon: "success",
//       title: "Data berhasil tersimpan",
//       showConfirmButton: false,
//       timer: 1500
//     });
//   } catch (error) {
//     console.error('Error submitting form:', error);
//   }
// };

const printBarang = () => {
  Swal.fire({
    title: "Download Label Print!",
    text: "Pastikan anda mendownload label print!",
    icon: "warning",
    showConfirmButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",});
  // window.open("DetailPengiriman", "_blank");
  // detailModal.show();
  // opendetailModal()
  
};

const printBtn = () => {
  const printLabelPengiriman = new bootstrap.Modal(document.getElementById('printLabel'));
  print(printLabelPengiriman)
};


const kirimBarang = async (id_barang_keluar) => {
  try {
    const response = await axios.patch(`barang-keluar/kirim/${id_barang_keluar}`);
    fetchData();
    console.log('Response:', response.data);
    barangListId.value = response.data.data;
    // const detailModal = new bootstrap.Modal(document.getElementById('detailModal'));
    // detailModal.show(id_barang_keluar);
    // await fetchData(id_barang_keluar);
  } catch (error) {
    console.error('Error Kirim data:', error);
  }
};

const confirmKirimBarang = (id_barang_keluar) => {
    Swal.fire({
      title: "Konfirmasi Kirim Barang",
      text: "Apakah anda ingin mengirimkan barang ini?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Ya, Kirim",
    }).then((result) => {
        if (result.isConfirmed) {
          kirimBarang(id_barang_keluar).then(() => {
            Swal.fire({
              title: "Barang Terkirim!",
              text: "Barang terkirim, silahkan print label pengiriman.",
              icon: "success",
              timer: 5000,
          }).then(() => {
            setTimeout(() => {
              printBarang();
              opendetailModal(id_barang_keluar)
              Swal.fire({
                title: "Download Label Print!",
                text: "Pastikan anda mendownload label print!",
                icon: "warning",
                showConfirmButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
            }, 1500);
          });
        });
      })
    };
    });
  };

  // const barangList = ref([]);
  const barangListId = ref([]);

  const opendetailModal = async (id_barang_keluar) => {
  // barangListId.value.id_barang_keluar = data.id_barang_keluar
  // barangListId.value.id_barang = data.id_barang
  // barangListId.value.id_pelanggan = data.id_pelanggan
  // barangListId.value.kuantitas = data.kuantitas
  // barangListId.value.Pengiriman = Pengiriman
  // newBarang.value.id_barang_keluar = barangKlr.id_barang_keluar;
  // newBarang.value.id_barang = barangKlr.id_barang;
  // newBarang.value.id_pelanggan= barangKlr.id_pelanggan;
  // newBarang.value.kuantitas = barangKlr.kuantitas;
  // newBarang.value.tanggal_keluar = barangKlr.tanggal_keluar;
  try {
    const response = await axios.get(`/barang-keluar/${id_barang_keluar}`);
    barangListId.value = response.data.data;
    console.log(response.data.msg)
    console.log(response.data.data)
    console.log (response.data.data.pelanggan.nama_pelanggan)
    // kirimBarang(id_barang_keluar)
  } catch (error) {
    console.error('Error fetching data:', error);
    console.log(response.data.msg)
  }
  const detailModal = new bootstrap.Modal(document.getElementById('detailModal'));
  detailModal.show();
  // console.log('Response:', response.data);
  // fetchDataId()
};

onMounted(fetchData);
onMounted(fetchDataModal);
onMounted(fetchDataModalCus);
</script>


<style scoped>


@import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');

*,
::after,
::before {
  box-sizing: border-box;
}

@media print {
  #printLabel {
    display: none;
  }
  #printLabel {
    display: block;
  }
}

/* @import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap'); */

.logo-nusantara {
    height: 120px;
    width: 120px;
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