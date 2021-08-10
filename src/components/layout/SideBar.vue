<template>
  <div id="sideBar">
    <el-menu class="h-full" router background-color="#1890ff" text-color="#fff">
      <SideBarItem
        v-for="item in menu"
        :key="item.id"
        :model="item"
      ></SideBarItem>
    </el-menu>
  </div>
</template>
<script type="text/babel">
import SideBarItem from './SideBarItem'
import microApps from '@/micro-app'

export default {
  name: 'sideBar',
  components: { SideBarItem },
  mixins: [],
  data() {
    return {
      microApps,
      menu: [
        {
          name: 'plant',
          url: '/plant',
          children: [
            {
              name: 'a-home',
              url: '/plant/#/',
              children: []
            },
            {
              name: 'a-about',
              url: '/plant/#/about',
              children: []
            },
          ]
        },
        {
          name: 'data',
          url: '/data',
          children: [
            {
              name: 'b-home',
              url: '/data/#/',
              children: []
            },
            {
              name: 'b-about',
              url: '/data/#/about',
              children: []
            },
          ]
        }
      ]
    }
  },
  computed: {},
  watch: {},
  methods: {},
  beforeCreate() {},
  created() {},
  beforeMount() {},
  mounted() {},
  beforeUpdate() {},
  updated() {},
  beforeDestroy() {},
  destroyed() {}
};
</script>

<style lang="scss" rel="stylesheet/scss" type="text/scss" scoped>
</style>
