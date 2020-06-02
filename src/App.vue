<template>
  <div id="app">
    <div id="nav">
      <NavBar />
    </div>
    <br /><br /><br />
    <b-container>
      <b-row>
        <router-view />
      </b-row>
    </b-container>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
export default {
  components: {
    NavBar
  }
};
</script>
