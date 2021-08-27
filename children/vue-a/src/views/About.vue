<template>
  <div class="about">
    <h1>This is an about page</h1>
    <div>
      {{ currentLang }}
      --
      {{ currentTheme }}
    </div>
    <div>
      <el-date-picker></el-date-picker>
    </div>
    <div>
      <button @click="$globalFn.toLoginPage()">登录跳转</button>
    </div>
    <div>
      <button @click="changeTheme()">主题切换</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'about',
  computed: {
    currentLang() {
      return this.$root.globalStore.state.currentLang
    },
    currentTheme() {
      return this.$root.globalStore.state.currentTheme
    },
  },
  methods: {
    async changeTheme() {
      const theme = this.currentTheme === 'white' ? 'black' : 'white'
      this.$root.globalStore.dispatch('currentTheme', theme)
    },
  },
  created() {},
}
</script>
