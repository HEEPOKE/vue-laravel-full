<template>
  <div class="">
    <nav class="navbar navbar-dark bg-dark navbar-expand-lg bg-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">Navbar</a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarToggler"
          aria-controls="navbarToggler"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarToggler">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">Store</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Link</a>
            </li>
          </ul>
          <nav>
            <div class="Auth-button">
              <button class="btn btn-primary col-auto mx-2">Login</button>
              <button class="btn btn-primary col-auto">Register</button>
            </div>
          </nav>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {};
</script>
