<script setup>
  import Aside from '@/components/BaseNavigation.vue'
  import { RouterView } from 'vue-router'
</script>

<template>
  <Aside />
  <RouterView />
</template>

<style>
  main {
    padding-left: 270px;
  }

  section {
    background-color: var(--bg-black-900);
    min-height: 100vh;
    display: block;
    /* position: fixed; */
    left: 270px;
    padding: 0 30px;
    opacity: 1;
    width: -webkit-fill-available;
  }

  .contact, .projek {
    min-height: 100vh;
    color: var(--text-black-900);
  }

  .padd-15 {
    padding-left: 15px;
    padding-right: 15px;
  }

  .container {
    max-width: 1100px;
    width: 100%;
    margin: auto;
  }

  section .container {
    padding-top: 60px;
    padding-bottom: 70px;
  }

  .section-title {
    flex: 0 0 100%;
    max-width: 100%;
    margin-bottom: 60px;
  }

  .section-title h2 {
    font-size: 40px;
    color: var(--text-black-900);
    font-weight: 700;
    position: relative;
  }

  .section-title h2::before {
    content: '';
    height: 4px;
    width: 50px;
    background: red;
    position: absolute;
    top: 100%;
    left: 0;
  }

  .section-title h2::after {
    content: '';
    height: 4px;
    width: 25px;
    background: red;
    position: absolute;
    top: 100%;
    left: 0;
    margin-top: 8px;
  }
  
  .row {
    display: flex;
    flex-wrap: wrap;
    margin-left: -15px;
    margin-right: -15px;
    position: relative;
  }

  @media (max-width: 1199px) {
    aside {
      left: -270px;     
    }

    main {
      padding-left: 0;
    }

    .about .personal-info p span {
      display: block;
      margin-left: 0;  
    }

    .nav-toggler .fa-bars {
      display: flex;
      left: 30px;
    }

    .aside.open {
      left: 0px;
    }

    .aside.open .nav-toggler .fa-bars {
      position: fixed;
      left: 300px;
    }
  }

  @media (max-width: 992px) {
    .home .home-konten, .contact-from, .gambar, .detail .info {
      flex: 0 0 100%;
      max-width: 100%;
    }

    .home .home-hero {
      display: none;
    }

    .project-item {
      flex: 0 0 50%;
      max-width: 50%;
      margin-bottom: 40px;
      padding: 0 15px;
    }
  }

  @media (min-width: 993px) {
    .home .home-konten {
      flex: 0 0 60%;
      max-width: 60%;
    }

    .project-item {
      flex: 0 0 33.33%;
      max-width: 33.33%;
      margin-bottom: 40px;
      padding: 0 15px;
    }

    .contact-from {
      flex: 0 0 70%;
      max-width: 70%;
    }

    .gambar {
      flex: 0 0 60%;
      max-width: 60%;
    }

    .detail .info {
      flex: 0 0 40%;
      max-width: 40%;
    }

    nav a,
    nav a:focus {
      width: 56px;
    }

    nav a span,
    nav a:focus span {
      display: none;
      color: black;
    }
  }

  @media (max-width: 767px) {
    .personal-info, .pelatihan {
      flex: 0 0 100%;
      max-width: 100%;
    }

    .pelatihan .pelatihan-item {
      padding: 20px 40px 0 0;
      margin-top: -2px;
      border-top: 2px solid red;
      position: relative;
      display: table-cell;
    }
  }

  @media (min-width: 768px) {
    .personal-info {
      flex: 0 0 70%;
      max-width: 70%;
    }

    .pelatihan {
      flex: 0 0 30%;
      max-width: 30%;
    }

    .pelatihan .pelatihan-item {
      padding: 0 0 20px 20px;
      margin-top: -2px;
      border-left: 2px solid red;
      position: relative;
    }
  }

  @media (max-width: 650px) {
    .project-item {
      flex: 0 0 100%;
      max-width: 100%;
    }
  }
</style>
