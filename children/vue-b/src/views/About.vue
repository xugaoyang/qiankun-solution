<template>
  <div class="about">
    <h1>This is an about page</h1>
    <div>
      {{ currentLang }}
      --
      {{ currentTheme }}
    </div>
  </div>
</template>
<script>
export default {
  name: "about",
  computed: {
    currentLang() {
      return this.$store.state.global.currentLang;
    },
    currentTheme() {
      return this.$store.state.global.currentTheme;
    }
  },
  created() {
    // this.$store.commit("global/setGlobalState", { currentTheme: "white" });
  }
};
</script>