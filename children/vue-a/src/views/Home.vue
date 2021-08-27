<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <div>
      {{ currentLang }}
      --
      {{ currentTheme }}
    </div>
    <img alt="Vue logo" src="../../public/logo.png" />
    <div class="set-assets-bg"></div>
    <div class="set-public-img"></div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld,
  },
  data() {
    return {}
  },
  computed: {
    baseUrl() {
      return process.env.BASE_URL
    },
    currentLang() {
      return this.$root.globalStore.getters.currentLang
    },
    currentTheme() {
      return this.$root.globalStore.getters.currentTheme
    },
  },
  created() {},
}
</script>

<style lang="scss" rel="stylesheet/scss" type="text/scss" scoped>
.set-assets-bg {
  width: 800px;
  height: 500px;
  background-image: url(../assets/bg.png);
}
.set-public-img {
  width: 500px;
  height: 200px;
  background-image: url(../../public/bg1.jpg);
  background-repeat: no-repeat;
  background-size: 100% 100%;
}
</style>
