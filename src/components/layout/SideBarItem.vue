<template>
  <el-submenu v-if="elType === 'submenu'" :index="model.url">
    <template slot="title">
      {{ model.name }}
    </template>
    <SideBarItem
      v-for="item in model.children"
      :key="item.id"
      :model="item"
    ></SideBarItem>
  </el-submenu>
  <el-menu-item v-else @click="goto(model)" :title="model.name">
    {{ model.name }}
  </el-menu-item>
</template>
<script>
export default {
  name: 'SideBarItem',
  data() {
    return {}
  },
  props: {
    model: Object
  },
  computed: {
    hasChild() {
      return this.model.children && this.model.children.length
    },
    elType() {
      if (this.hasChild) return 'submenu'
      return 'item'
    },
  },
  methods: {
    goto(item) {
      history.pushState(null, item.url, item.url)
    }
  }
};
</script>

<style lang="scss" rel="stylesheet/scss" type="text/scss" scoped></style>
