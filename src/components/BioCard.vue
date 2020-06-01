<template>
  <div>
    <b-card-group deck>
      <b-card
        header="featured"
        header-tag="header"
        footer="Card Footer"
        footer-tag="footer"
        title="Title"
      >
        <b-card-text>{{ person.professionalHeadline }}</b-card-text>
        <b-button href="#" variant="primary">Go somewhere</b-button>
      </b-card>
    </b-card-group>
  </div>
</template>

<script>
export default {
  props: {
    person: {
      Type: Object,
      required: true
    }
  }
};
</script>

<style></style>
