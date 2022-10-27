<template>
  <headerVue />
  <div class="container justify-content-center form-register col-6 mt-3">
    <div class="card mt-3">
      <div class="card-body">
        <div class="container">
          <div class="mb-3">
            <label for="name" class="form-label">name</label>
            <input
              type="text"
              class="form-control"
              id="Username"
              placeholder="Username"
            />
          </div>
          <div class="mb-3">
            <label for="Tel" class="form-label">Tel</label>
            <input
              type="text"
              class="form-control"
              id="Tel"
              placeholder="xxx-xxx-xxxx"
            />
          </div>
          <div class="mb-3">
            <label for="Password" class="form-label">Password</label>
            <input
              type="password"
              class="form-control"
              id="Password"
              placeholder="password"
              minlength="8"
            />
          </div>
          <div class="mb-3">
            <label for="Confrim-Password" class="form-label">Password</label>
            <input
              type="password"
              class="form-control"
              id="Confrim-Password"
              placeholder="Confrimpassword"
              minlength="8"
            />
          </div>
          <div class="text-center">
            <button
              type="submit"
              class="btn btn-primary text-center col-3 my-2 mx-2"
            >
              ยืนยัน
            </button>
            <button
              class="btn btn-secondary col-3"
              onclick="window.history.back()"
            >
              ย้อนกลับ
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import headerVue from "./header.vue";
import uploadVue from "./upload.vue";

export default {
  name: "formVue",
  components: {
    headerVue,
    uploadVue,
  },
};
</script>
