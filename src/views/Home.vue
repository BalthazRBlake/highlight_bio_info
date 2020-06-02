<template>
  <b-col md>
    <div class="home">
      <UsersTable></UsersTable>
    </div>
  </b-col>
</template>

<script>
import UsersTable from "@/components/UsersTable.vue";

export default {
  components: {
    UsersTable
  }
};
</script>
