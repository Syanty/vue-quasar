<template>
  <div id="q-app">
    <router-view />
  </div>
</template>
<script>
import { mapActions } from "vuex";
export default {
  name: "App",
  methods: {
    ...mapActions("auth", ["onAuthStateChanged"])
  },
  mounted() {
    this.onAuthStateChanged();
  }
};
</script>
<style>
.text-strikethrough {
  text-decoration: line-through;
}
</style>
