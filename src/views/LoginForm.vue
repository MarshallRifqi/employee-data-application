<template>

  <div class="hero-overlay"></div>
<div class="container-sm d-flex justify-content-center align-items-center min-vh-100 bg-card">
      <!-- login -->
      <div class="row border rounder-5 bg-white shadow box-area rounded">
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
          <form @submit.prevent="handleLogin" class="needs-validation">
            <div class="row align-items-center">
              <div class="header-text mb-4">
                <h2>Sign In</h2>
              </div>
              <div class="input-group mb-3">
                <div class="col">
                  <label for="" class="mb-2">Username</label>
                  <input type="text" id="username" v-model="username" class="form-control form-control-lg bg-light fs-6 w-100" placeholder="Username" required autofocus />
                  <div class="invalid-feedback">Username is invalid</div>
                </div>
              </div>
              <div class="input-group mb-5">
                <div class="col">
                  <label for="" class="mb-2">Password</label>
                  <input type="password" id="password" v-model="password" class="form-control form-control-lg bg-light fs-6" placeholder="password" required />
                  <div class="invalid-feedback">Password is required</div>
                </div>
              </div>
              <div class="input-group mb-3">
                <button type="submit" class="btn btn-lg btn-danger w-100 fs-6">Sign In
                  <!-- <RouterLink :to="{ name: 'Dashboard' }" class="nav-link">Login</RouterLink> -->
                </button>
              </div>
              <div class="input-group mb-5 d-flex justify-content-between">
                <div class="forgot">
                  <p>Belum mempunyai akun ?
                    <a href="#">
                      <RouterLink :to="{ name: 'Register' }" class="nav-link">Sign Up sekarang!</RouterLink>
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
import { useRouter } from 'vue-router';
import Cookies from 'js-cookie';

export default {
  data() {
    return {
      username: '',
      password: '',
    };
  },
  setup() {
    const router = useRouter();
    return { router };
  },
  methods: {
    async handleLogin() {
      try {
        const response = await axios.post('/login', {
        username: this.username,
        password: this.password,
        }, {
          withCredentials: true
        });
        const { accesToken } = response.data;
        console.log(response.data)
        // Cookies.set(accesToken, { expires: 7 }); 
        // localStorage.setItem('token', accesToken);
        // this.router.push({ name: 'Dashboard' });
        // console.log(response.data)
        // Swal.fire({
        // position: "top-end",
        // icon: "success",
        // title: response.data.msg,
        // showConfirmButton: false,
        // timer: 2000
        // });
        if (accesToken) {
          // Set the token in cookies
          Cookies.set('token', accesToken, { expires: 7 });
          console.log('Token set in cookies:', Cookies.get('token')); // Log the token value

          this.router.push({ name: 'Dashboard' });
        // console.log(response.data)
        Swal.fire({
        position: "top-end",
        icon: "success",
        title: response.data.msg,
        showConfirmButton: false,
        timer: 2000
        });
        }else{
          console.log('error')
        }
      } catch (error) {
        console.error('Login failed:', error);
        Swal.fire({
        position: "top-end",
        icon: "error",
        title: error.response.data.msg,
        showConfirmButton: false,
        timer: 1500
        });
      }
    },
  },
};

const Dashboard = () => {
  
}

</script>

<style>

.box-shadow{
  box-shadow: -1px 1px 39px 8px rgba(0,0,0,0.14);
-webkit-box-shadow: -1px 1px 39px 8px rgba(0,0,0,0.14);
-moz-box-shadow: -1px 1px 39px 8px rgba(0,0,0,0.14);
}

</style>