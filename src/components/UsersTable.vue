<template>
  <b-col md="6">
    <b-table
      hover
      responsive
      sort-icon-left
      sticky-header="600px"
      :items="users"
      :small="small"
      :busy="isBusy"
    >
      <template v-slot:table-busy>
        <div class="text-center text-info my-2">
          <b-spinner class="align-middle"></b-spinner>
          <strong>Loading...</strong>
        </div>
      </template>
      <template v-slot:cell(username)="data">
        <div>
          <router-link
            :to="{
              name: 'PersonDetails',
              params: { username: data.item.username }
            }"
          >
            {{ data.item.username }}
          </router-link>
        </div>
      </template>
    </b-table>
  </b-col>
</template>

<script>
import BioService from "@/service/BioService.js";

export default {
  data() {
    return {
      users: [],
      small: true,
      offset: 0,
      size: 10
    };
  },
  created() {
    BioService.getUsersPaginated(this.offset, this.size)
      .then(response => {
        this.users = response.data.results;
      })
      .catch(error => {
        console.log(error.response);
      });
  },
  computed: {
    isBusy() {
      return this.users.length === 0 ? true : false;
    }
  }
};
</script>
