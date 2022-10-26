<template>
  <div class="">
    <nav class="navbar navbar-dark bg-dark navbar-expand-lg bg-light">
      <div class="container-fluid">
        <router-link class="dis" to="/">
          <a class="navbar-brand">Topic</a>
        </router-link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggler"
          aria-controls="navbarToggler" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarToggler">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <router-link class="dis" to="/">
                <a class="nav-link active" aria-current="page">Home</a>
              </router-link>
            </li>
            <li class="nav-item">
            <router-link class="dis" to="/">
              <a class="nav-link active" aria-current="page" href="/store">Store</a>
            </router-link>
          </li>
          </ul>
          <form class="d-flex mx-3" role="search">
            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button class="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
          <nav>
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <router-link class="dis" to="/login">
                  <a class="nav-link active" aria-current="page">Login</a>
                </router-link>
              </li>
              <li class="nav-item">
                <router-link class="dis" to="/register">
                  <a class="nav-link active" aria-current="page">Register</a>
                </router-link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>

export default {
  name: 'NavbarMenu',
};
</script>
