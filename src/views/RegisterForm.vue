<template>
  <div class="container-sm d-flex justify-content-center align-items-center min-vh-100">
    <!-- login -->
    <div class="row border rounder-5 bg-white shadow box-area">
      <!-- kotak kiri -->
      <div class="col-md-6 d-flex justify-content-center align-items-center flex-column left-box">
        <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
          <div class="carousel-inner">
            <div class="carousel-item active" data-bs-interval="10000">
              <img src="../assets/Mobile-login.jpg" class="d-block w-100" alt="..." />
            </div>
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      <!-- kotak kanan -->
      <div class="col-md-6 p-4 my-3 right-box">
        <form @submit.prevent="register" class="needs-validation" autocomplete="off">
          <div class="row align-items-center">
            <div class="header-text mb-4">
              <h2>Sign Up</h2>
            </div>
            <div class="input-group mb-3">
              <div class="col">
                <label for="username" class="mb-2">Username</label>
                <input type="text" id="username" v-model="username" class="form-control form-control-lg bg-light fs-6 w-100" placeholder="Username" required autofocus />
                <div class="invalid-feedback">Username is invalid</div>
              </div>
            </div>
            <div class="input-group mb-3">
              <div class="col">
                <label for="password" class="mb-2">Password</label>
                <input type="password" id="password" v-model="password" class="form-control form-control-lg bg-light fs-6" placeholder="password" required />
                <div class="invalid-feedback">Password is required</div>
              </div>
            </div>
            <div class="input-group mb-5">
              <div class="col">
                <label for="confirmPassword" class="mb-2">Confirm Password</label>
                <input type="password" id="confirmPassword" v-model="confirmPassword" class="form-control form-control-lg bg-light fs-6" placeholder="password" required />
                <div class="invalid-feedback">Password is required</div>
              </div>
            </div>
            <div class="input-group mb-2 mt-3">
              <button type="submit" class="btn btn-lg btn-danger w-100 fs-6">Sign Up</button>
            </div>
            <div class="input-group mb-5 mt-3 d-flex justify-content-between">
              <div class="forgot">
                <p>Sudah mempunyai akun ?
                  <a href="#">
                    <RouterLink to="/login" class="nav-link">Sign in Di sini!</RouterLink>
                  </a>
                </p>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>

import axios from 'axios';

export default {
data() {
  return {
    username: '',
    password: '',
    confirmPassword: ''
  }
},
methods: {
  async register() {
    try {
      const response = await axios.post('/register', {
        username: this.username,
        password: this.password,
        confirmPassword: this.confirmPassword
      });
      console.log(response.data);
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: response.data.msg,
        showConfirmButton: false,
        timer: 1500
        });
      this.$router.push({ name: 'Login' });
    } catch (error) {
      console.error(error.response.data.message);
      Swal.fire({
        position: "top-end",
        icon: "error",
        title: error.response.data.msg,
        showConfirmButton: false,
        timer: 1500
        });
    }
  }
}
}

</script>