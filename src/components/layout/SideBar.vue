<template>
  <div id="sideBar">
    <el-menu class="h-full" router background-color="#1890ff" text-color="#fff">
      <SideBarItem v-for="item in menu" :key="item.id" :model="item"></SideBarItem>
    </el-menu>
  </div>
</template>
<script type="text/babel">
import SideBarItem from './SideBarItem'

export default {
  name: 'sideBar',
  components: { SideBarItem },
  mixins: [],
  data() {
    return {
      menu: [
        {
          name: 'vue-a',
          url: '/vue-a',
          children: [
            {
              name: 'a-home',
              url: '/vue-a/#/',
              children: [],
            },
            {
              name: 'a-about',
              url: '/vue-a/#/about',
              children: [],
            },
          ],
        },
        {
          name: 'vue-b',
          url: '/vue-b',
          children: [
            {
              name: 'b-home',
              url: '/vue-b/#/',
              children: [],
            },
            {
              name: 'b-about',
              url: '/vue-b/#/about',
              children: [],
            },
          ],
        },
      ],
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
  destroyed() {},
}
</script>

<style lang="scss" rel="stylesheet/scss" type="text/scss" scoped></style>
