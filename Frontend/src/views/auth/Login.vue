<template>
  <div class="container justify-content-center col-6 mt-3 form-login">
    <div class="card">
      <div class="card-body text-white">
        <div>
          <h3 class="text-dark text-center">Login</h3>
        </div>
      </div>
      <div class="container">
        <div class="mb-3">
          <label for="Username" class="form-label">Username</label>
          <input
            type="text"
            class="form-control"
            id="Username"
            name="Username"
            placeholder="Username"
          />
        </div>
        <div class="mb-3">
          <label for="Password" class="form-label">Password</label>
          <input
            type="password"
            class="form-control"
            id="Password"
            name="Password"
            placeholder="password"
            minlength="8"
          />
        </div>
        <div class="form-check">
          <input
            class="form-check-input"
            type="checkbox"
            id="flexCheckChecked"
            checked
          />
          <label class="form-check-label" for="flexCheckChecked">
            จดจำฉัน
          </label>
        </div>
        <div class="text-center">
          <button
            type="submit"
            class="btn btn-primary text-center col-3 my-2 mx-2"
          >
            ยืนยัน
          </button>
          <button class="btn btn-secondary col-3" onclick="window.history.back()">
            ยกเลิก
          </button>
        </div>
        <div class="container mt-2">
          <div class="row justify-content-center">
            <hr class="col-10" />
          </div>
          <div class="text-center">OR</div>
        </div>
        <div class="container">
          <div class="row justify-content-center">
            <button class="btn btn-dark col-6 mt-1 social fb">
              <font-awesome-icon
                class="mx-2"
                icon="fa-brands fa-square-facebook"
              />Sign in with Facebook
            </button>
          </div>
        </div>
        <div class="container mb-3">
          <div class="row justify-content-center">
            <button class="btn btn-dark col-6 mt-1 social google">
              <font-awesome-icon class="mx-2" icon="fa-brands fa-google" />
              Sign in with Google
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "LoginVue",
};
</script>
