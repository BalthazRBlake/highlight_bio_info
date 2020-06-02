<template>
  <b-row>
    <b-col md="6">
      <div class="overflow-auto">
        <b-pagination
          v-model="currentPage"
          :total-rows="rows"
          :per-page="size"
          aria-controls="my-table"
          pills
          size="sm"
        ></b-pagination>

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
      </div>
    </b-col>

    <b-col md="6">
      <b-form @submit.prevent="filter(searchName)" inline>
        <b-input-group prepend="@" class="mb-2 mr-sm-2 mb-sm-0">
          <b-input v-model="searchName" placeholder="Name"></b-input>
        </b-input-group>

        <b-button
          variant="primary"
          @click="filter(searchName)"
          :disabled="isReady"
        >
          Filter
        </b-button>
      </b-form>
    </b-col>
  </b-row>
</template>

<script>
import BioService from "@/service/BioService.js";

export default {
  data() {
    return {
      users: [],
      name: "*",
      small: true,
      currentPage: 1,
      size: 15,
      rows: 1,
      searchName: ""
    };
  },
  created() {
    this.refreshTable();
  },
  beforeUpdate() {
    this.refreshTable();
  },
  computed: {
    isBusy() {
      return this.users.length === 0 ? true : false;
    },
    offset() {
      return this.currentPage;
    },
    isReady() {
      return this.searchName.length === 0 ? true : false;
    }
  },
  methods: {
    refreshTable() {
      BioService.getUsersPaginated(this.offset, this.size, this.name)
        .then(response => {
          this.users = [];
          this.users = response.data.results;
          this.rows = response.data.total;
        })
        .catch(error => {
          console.log(error.response);
        });
    },
    filter(searchName) {
      this.name = searchName;
      this.searchName = "";
    }
  }
};
</script>
