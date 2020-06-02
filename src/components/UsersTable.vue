<template>
  <b-col md>
    <div>
      <b-table
        hover
        responsive
        sort-icon-left
        sticky-header="500px"
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
      </b-table>
    </div>
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
      size: 5
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
