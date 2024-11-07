<template>

        <div class="modal fade" id="editModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h1 class="modal-title fs-5" id="exampleModalLabel">Form Edit Barang</h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                <form action="" class="mb-3">
                  <div class="container-fluid">
                    <div class="row">
                      <div class="mb-3 col-md-12">
                        <label for="recipient-name" class="col-form-label">Pilih kode barang</label>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-md-10">
                        <input type="text" class="form-control" id="recipient-name">
                      </div>
                      <div class="col-md-2">
                        <button type="button" class="btn btn-primary"><i class="bi bi-search"></i></button>
                      </div>
                    </div>
                  </div>
                </form>
                <form>
                  <div class="container-fluid">
                    <div class="row">
                      <div class="mb-3 col-md-7">
                        <label for="message-text" class="col-form-label">Nama Barang</label>
                        <input type="text" class="form-control" id="message-text" readonly placeholder="Nama barang akan tampil">
                      </div>
                      <div class="mb-3 col-md-5">
                        <label for="message-text" class="col-form-label">Tipe Ban</label>
                        <input type="text" class="form-control" id="message-text" readonly placeholder="tipe barang akan tampil">
                      </div>
                    </div>
                    <div class="mb-3">
                      <label for="message-text" class="col-form-label">Jumlah masuk stok</label>
                      <input type="number" class="form-control" id="message-text" min="0" max="200"> 
                    </div>
                  </div>
                </form>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-danger" data-bs-dismiss="modal"><i class="bi bi-x-lg"></i><span class="mx-2">Batal</span></button>
                <button type="button" class="btn btn-primary"><i class="bi bi-check2"></i><span class="mx-2">Simpan</span></button>
              </div>
            </div>
          </div>
        </div>

</template>