<template>
  <el-header style="height: 50px">
    <div class="header-common h-full">
      <div class="clear-both h-full">
        <div class="float-left m-r-10 menu-area">
          <div class="menu-trigger">
            <!-- <i class="iconfont icon-list fz-16"></i> -->
          </div>
        </div>
        <div class="float-left h-full" style="width: 320px">
          <!-- <a
            class="logo dib w-100 h-full"
            :style="{
              background: `url(${logoUrl}) 0 center no-repeat`,
            }"
          ></a>-->
          主题：{{ currentTheme }} &nbsp;&nbsp;语言：{{ currentLang }}
        </div>
        <div class="float-right mt-15 mr-10 cursor-pointer">
          <i class="iconfont icon-quit text-14px mr-10"></i>
        </div>
        <div class="float-right mt-15 mr-10 user_info">
          <i class="iconfont icon-me text-14px"></i>
          <!-- {{ userInfo ? userInfo.userName : "非法登录" }} -->
        </div>
        <div class="float-right mr-10 mt-15">
          <el-select
            filterable
            v-model="currentLang"
            style="width: 100px"
            size="mini"
          >
            <el-option label="中文" value="zh"></el-option>
            <el-option label="English" value="en"></el-option>
          </el-select>
        </div>
        <div class="float-right mr-10 mt-15">
          <el-select
            filterable
            v-model="currentTheme"
            placeholder="主题选择"
            style="width: 100px"
            size="mini"
          >
            <el-option label="默认浅色" value="white"></el-option>
            <el-option label="默认深色" value="black"></el-option>
          </el-select>
        </div>
      </div>
    </div>
  </el-header>
</template>

<script type="text/babel">
import store from '@/store'

export default {
  name: 'headerBar',
  components: {},
  mixins: [],
  data() {
    return {}
  },
  computed: {
    globalState() {
      return store.getGlobalState()
    },
    permission() {
      return store.getGlobalState('permission')
    },
    currentTheme: {
      get() {
        return store.getGlobalState('currentTheme')
      },
      set(val) {
        return store.setGlobalState(Object.assign(this.globalState, {currentTheme:val}))
      },
    },
    currentLang: {
      get() {
        return store.getGlobalState('currentLang')
      },
      set(val) {
        return store.setGlobalState(Object.assign(this.globalState, {currentLang:val}))
      },
    },
  },
  watch: {},
  methods: {},
  beforeCreate() {},
  created() {},
  beforeMount() {},
  mounted() {},
  beforeUpdate() {},
  updated() {},
  activated() {},
  deactivated() {},
  beforeDestroy() {},
  destroyed() {}
};
</script>
<style lang="scss" rel="stylesheet/scss" type="text/scss" scoped>
.header-common {
  position: relative;
  z-index: 998;
  .font-italic {
    font-style: italic;
  }
  .menu-trigger {
    height: 50px;
    width: 200px;
    color: #fff;
    font-size: 14px;
    background-size: 100% 100%;
    background-repeat: no-repeat;
  }
}
</style>
