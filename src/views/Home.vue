<template>
  <div class="home">
    {{ userName }}'s Bio
    <br />
    {{ bio }}
  </div>
</template>

<script>
import BioService from "@/service/BioService.js";

export default {
  data() {
    return {
      userName: "fabianhumbertohernandezforero",
      bio: {}
    };
  },
  created() {
    BioService.getBioByUserName(this.userName)
      .then(response => {
        this.bio = response.data;
      })
      .catch(error => {
        console.log(error.response);
      });
  }
};
</script>
