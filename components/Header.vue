<script setup lang="ts"></script>

<template>
<nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <nuxt-link class="navbar-brand" to='/'>Navbar</nuxt-link>
    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
      <li class="nav-item">
        <nuxt-link class="nav-link" aria-current="page" to="/">Home</nuxt-link>
      </li>
      <li class="nav-item">
        <nuxt-link class="nav-link" to="/room">Room</nuxt-link>
      </li>
    </ul>
  </div>
</nav>
</template>

<style scoped></style>
