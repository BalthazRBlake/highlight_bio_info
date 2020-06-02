<template>
  <div>
    <b-card v-if="person" style="max-width: 30rem;">
      <template v-slot:header>
        <h4 class="mb-0">{{ person.name }}</h4>
      </template>

      <b-card-body>
        <b-card-title>
          <b-avatar variant="info" :src="person.picture" size="9rem"></b-avatar>
        </b-card-title>
        <b-card-sub-title class="mb-2">
          {{ person.professionalHeadline }}
        </b-card-sub-title>
        <b-card-text v-if="strengths">
          <span v-for="strength in strengths" :key="strength.name">
            <b-badge variant="success">
              {{ strength.name }}
            </b-badge>
            |
          </span>
        </b-card-text>
      </b-card-body>
    </b-card>

    <b-card v-if="error" style="max-width: 30rem;" :title="error.errorMessage">
      <b-card-title>
        <b-avatar variant="danger" size="9rem"></b-avatar>
      </b-card-title>
      <b-card-sub-title class="mb-2">
        {{ error.errorCode }}
      </b-card-sub-title>
    </b-card>
  </div>
</template>

<script>
export default {
  props: {
    bio: {
      Type: Object,
      required: true
    }
  },
  computed: {
    person() {
      return this.bio.person;
    },
    strengths() {
      return this.bio.strengths;
    },
    error() {
      return this.bio.error;
    }
  }
};
</script>

<style></style>
