<template>
  <nav class="navbar navbar-expand-md navbar-light bg-light p-3">
    <div class="container-fluid">
      <router-link to="/about" class="nav-link fw-bold fs-3 d-flex"
        ><i class="bi bi-arrow-right-square"></i>
        <h1>LIU MIN YAO</h1></router-link
      >
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-md-0 w-100 justify-content-end">
          <li class="nav-item">
            <router-link to="/about" class="nav-link" aria-current="page" href="#">ABOUT ME</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/resume" class="nav-link" href="#">RESUME</router-link>
          </li>
          <li class="nav-item dropdown">
            <router-link to="/product" class="nav-link" href="#">PROJECTS</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/contact" class="nav-link">CONTACT</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
