<template>
  <div class="home">
    <img alt="Vue logo" src="@/assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <div>
      {{ currentLang }}
      --
      {{ currentTheme }}
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "home",
  components: {
    HelloWorld
  },
  computed: {
    currentLang() {
      return this.$store.state.global.currentLang;
    },
    currentTheme() {
      return this.$store.state.global.currentTheme;
    }
  },
  created() {
    // this.$store.commit("global/setGlobalState", { currentTheme: "black" });
  }
};
</script>
