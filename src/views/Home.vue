<template>
  <b-container>
    <b-row>
      <b-col md>
        <div class="home">
          {{ userName }}'s Bio
          <br />
          <BioCard :bio="bio"> </BioCard>
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import BioService from "@/service/BioService.js";
import BioCard from "@/components/BioCard.vue";

export default {
  components: {
    BioCard
  },
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
