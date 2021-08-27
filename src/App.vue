<template>
  <div id="app" class="w-screen h-screen">
    <router-view v-if="isMainRouter"></router-view>
    <Layout v-else />
  </div>
</template>

<script>
import Layout from '@/components/layout'

export default {
  name: 'app',
  data() {
    return {}
  },
  components: {
    Layout,
  },
  computed: {
    isMainRouter() {
      console.log(['login', 'about', 'home'].includes(this.$route.name), this.$route.name)
      return ['login', 'about', 'home'].includes(this.$route.name)
    },
  },
  methods: {},
  created() {},
}
</script>

<style lang="scss"></style>
