<template>
  <b-container fluid class="text-center p-0 m-0">
    <Navbar />
    <b-jumbotron
      header="Vue Boilerplates"
      lead="vue-boilerplate-bootstrapvue-ts"
      header-tag="h2"
      fluid
      class="m-0 p-0 p-3"
      header-level="4"
    >
      <b-row align-h="center" no-gutters class="mb-4">
        <img width="130px" height="auto" src="/img/vue-boilerplates.svg" />
      </b-row>
      <p class="m-0 p-0">
        Vue + BootstrapVue + Typescript + Lazy loading and code splitting
      </p>
    </b-jumbotron>
    <b-container>
      <b-row>
        <b-col>
          <b-jumbotron
            header="Why Vue Boilerplates?"
            bg-variant="white"
            text-variant="dark"
            border-variant="white"
            header-tag="h2"
            class="text-left m-0"
            header-level="5"
          >
            <p>
              While mobile-first approach becomes a standard and uncertain
              network conditions are something we should always take into
              consideration, it’s harder and harder to keep your application
              loading fast. Vue Boilerplates was built with vue.js performance
              optimization techniques that make them loading instantly and
              perform smooth 🚀.
            </p>
          </b-jumbotron>
        </b-col>
        <b-col>
          <b-jumbotron
            header="Lets grow together!"
            lead="Please consider becoming a donor 🙏."
            bg-variant="white"
            text-variant="dark"
            border-variant="white"
            header-tag="h2"
            class="text-left m-0"
            header-level="5"
          >
            <p>
              Make a custom one time or recurring contribution to support my
              open source projects
            </p>
            <b-button
              variant="success"
              target="_blank"
              href="https://opencollective.com/vue-boilerplates"
              >Donate</b-button
            >
          </b-jumbotron>
        </b-col>
      </b-row>
    </b-container>
  </b-container>
</template>

<script lang="ts">
import { Vue, Component } from "@/utils/vue-imports";
import Navbar from "@/components/Navbar.vue";

@Component({
  name: "Home",
  components: {
    Navbar,
  },
})
export default class Home extends Vue {
  images = [
    ["/img/pwa.png", "/img/pwa.png", "/img/pwa.png"],
    ["/img/pwa.png", "/img/pwa.png"],
  ];
}
</script>
