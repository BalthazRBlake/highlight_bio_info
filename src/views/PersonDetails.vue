<template>
  <b-col md>
    {{ username }}'s Bio
    <br />
    <BioCard :bio="bio"> </BioCard>
  </b-col>
</template>

<script>
import BioService from "@/service/BioService.js";
import BioCard from "@/components/BioCard.vue";

export default {
  props: ["username"],
  components: {
    BioCard
  },
  data() {
    return {
      bio: {}
    };
  },
  created() {
    BioService.getBioByUserName(this.username)
      .then(response => {
        this.bio = response.data;
      })
      .catch(ex => {
        this.bio = {
          error: {
            errorMessage: ex.response.data.errorMessage,
            errorCode: ex.response.data.errorCode
          }
        };
        //console.log(ex.response);
      });
  }
};
</script>
