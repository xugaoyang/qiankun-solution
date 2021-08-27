<template>
  <div class="about">
    <h1>This is an about page</h1>
    <div>
      {{ currentLang }}
      --
      {{ currentTheme }}
    </div>
    <div>
      <button @click="changeLang()">语言切换</button>
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
  created() {},
  methods: {
    async changeLang() {
      const lang = this.currentLang === 'zh' ? 'en' : 'zh'
      this.$root.globalStore.dispatch('currentLang', lang)
    },
  },
}
</script>
