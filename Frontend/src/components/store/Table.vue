<template>
  <headerVue />
  <div class="container justify-content-center mt-3">
    <div class="card">
      <div class="card-body">
        <table class="table table-dark table-striped text-center">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">First</th>
              <th scope="col">Last</th>
              <th scope="col">Handle</th>
              <th scope="col">Manage</th>
            </tr>
          </thead>
          <tbody></tbody>
        </table>
      </div>
    </div>
  </div>
</template>
<script>
import headerVue from "./header.vue";

export default {
  name: "TableVue",
  components: {
    headerVue,
  },
};
</script>
