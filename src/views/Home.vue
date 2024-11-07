<template>

        <section id="hero" class="hero">
          <div class="hero-overlay"></div>
          <div class="welcome">
              <h4>WELCOME TO</h4>
              <h1>NUSANTARA PROJECT</h1>
              <p>Tire Warehouse Management System</p>
              <a class="btn btn-danger" href="/login" role="button">
                  <RouterLink :to="{ name: 'Login' }" class="nav-link">Get Started</RouterLink>
              </a>
          </div>
        </section>
 

</template>

<script>
// import banImage from '@/assets/ban.png';
  export default {
      name: 'Home'
  }
</script>

<style scoped>

:root {
    --pink: #f14e95;
    --bg: #0a0a0a;
    --shadow: 0 2px rgb(0 0 0 / 0.5);
}

body, html {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
}

.hero {
    position: relative;
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
}

.hero-overlay {
    background-image: url('../assets/ban.png');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    filter: blur(2px) grayscale(70%);
}

.welcome {
    position: relative;
    z-index: 1;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;
}

.welcome h1, .welcome h4, .welcome p {
    color: rgb(255, 255, 255);
    text-shadow: var(--shadow);
}

.welcome h1 {
    font-family: 'Montserrat', sans-serif;
    font-size: 4rem;
    font-weight: 500;
}

.welcome h4 {
    font-size: 1.2rem;
}

.welcome p {
    font-size: 1.2rem;
}

</style>