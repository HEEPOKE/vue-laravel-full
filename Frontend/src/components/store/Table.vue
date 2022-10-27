<template>
  <headerVue />
  <div class="container justify-content-center mt-3">
    <div class="card">
      <div class="card-body">
        <router-link to="/create">
          <button class="btn btn-primary col-2 mb-3 float-end">create</button>
        </router-link>
        <table class="table table-dark table-striped text-center">
          <thead>
            <tr class="text-center">
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Details</th>
              <th scope="col">expend</th>
              <th scope="col">Manage</th>
            </tr>
          </thead>
          <tbody class="text-center"></tbody>
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
