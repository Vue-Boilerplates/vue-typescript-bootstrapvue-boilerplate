<template>
  <b-container fluid class="text-center p-0 m-0">
    <Navbar />
    <b-jumbotron
      header="This is an About Page"
      lead=""
      header-tag="h2"
      fluid
      class="m-0"
      header-level="4"
    >
    </b-jumbotron>
  </b-container>
</template>

<script lang="ts">
import { Vue, Component } from "@/utils/vue-imports";
import Navbar from "@/components/Navbar.vue";

@Component({
  name: "About",
  components: {
    Navbar,
  },
})
export default class About extends Vue {}
</script>
