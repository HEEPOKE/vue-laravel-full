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
              id="name"
              placeholder="Username"
            />
          </div>
          <div class="mb-3">
            <label for="Details" class="form-label">details</label>
            <input
              type="text"
              class="form-control"
              id="Details"
              placeholder="detail"
            />
          </div>
          <div class="mb-3">
            <label for="Image" class="form-label">image</label>
            <input
              type="file"
              class="form-control"
              id="Images"
              name="Images[]"
              accept="image/*"
              multiple
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

export default {
  name: "formVue",
  components: {
    headerVue,
  },
};
</script>
