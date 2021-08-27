<template>
  <div id="pageTags" class="m-b-10">
    <el-scrollbar
      class="scroll-container"
      @wheel.native.prevent="handleScroll"
      ref="scrollContainer"
      :vertical="false"
    >
      <el-tooltip
        :content="tag.displayName"
        :open-delay="600"
        effect="light"
        v-for="(tag, index) in pageTags"
        :key="index"
      >
        <el-tag
          class="cursor-pointer mr-5"
          size="small"
          ref="tag"
          :disable-transitions="false"
          :type="tag.displayName === currentTag.displayName ? 'primary' : 'info'"
          :closable="tag.displayName !== disabledRemoveTagName"
          @click.native="handleClick(tag)"
          @close="handleClose(index, tag.displayName)"
        >
          {{ tag.displayName }}
        </el-tag>
      </el-tooltip>
    </el-scrollbar>
    <div>
      {{ pageTags }}
    </div>
    <div>
      {{ currentTag }}
    </div>
  </div>
</template>
<script type="text/babel">
export default {
  name: 'pageTags',
  components: {},
  mixins: [],
  data() {
    return {
      disabledRemoveTagName: '首页',
    }
  },
  computed: {
    pageTags() {
      return this.$store.getters.pageTags
    },
    currentTag() {
      return this.$store.getters.currentTag
    },
  },
  watch: {},
  methods: {
    handleScroll(e) {
      const eventData = e.wheelDelta || -e.deltaY * 40
      this.$refs.scrollContainer.$refs.wrap.scrollLeft =
        this.$refs.scrollContainer.$refs.wrap.scrollLeft + eventData / 4
    },
    moveToCurrent(currentTag) {
      const $container = this.$refs.scrollContainer.$el
      const $containerWidth = $container.offsetWidth
      const $scrollWrapper = this.$refs.scrollContainer.$refs.wrap
      const tagList = this.$refs.tag
      // 获取第一个标签和最后一个标签
      let firstTag = null
      let lastTag = null
      if (tagList.length > 0) {
        firstTag = tagList[0]
        lastTag = tagList[tagList.length - 1]
      }
      if (firstTag === currentTag) {
        $scrollWrapper.scrollLeft = 0
      } else if (lastTag === currentTag) {
        $scrollWrapper.scrollLeft = $scrollWrapper.scrollWidth - $containerWidth
      } else {
        const currentIdx = _.findIndex(tagList, (o) => {
          return o === currentTag
        })
        const prevTag = tagList[currentIdx - 1]
        const nextTag = tagList[currentIdx + 1]
        // 5:标签间间隔为5
        const afterNextTagOffsetLeft = nextTag.$el.offsetLeft + nextTag.$el.offsetWidth + 5
        const beforePreTagOffsetLeft = prevTag.$el.offsetLeft - 5
        if (afterNextTagOffsetLeft > $scrollWrapper.scrollLeft + $containerWidth) {
          $scrollWrapper.scrollLeft = afterNextTagOffsetLeft - $containerWidth
        } else if (beforePreTagOffsetLeft < $scrollWrapper.scrollLeft) {
          $scrollWrapper.scrollLeft = beforePreTagOffsetLeft
        }
      }
    },
    handleClick(data) {
      console.log(
        data,
        `${this.currentTag.system}${this.currentTag.path}`,
        `${data.system}${data.path}`
      )
      if (`${this.currentTag.system}${this.currentTag.path}` !== `${data.system}${data.path}`) {
        window.history.pushState(
          null,
          `${data.system}/#${data.fullPath}`,
          `${data.system}/#${data.fullPath}`
        )
        // this.$router.push(`/${data.system}/#${data.fullPath}`)
      }
    },
    async handleClose(index, name) {
      console.log('pageTag删除', index, name, this.currentTag.displayName)
      if (this.pageTags && this.pageTags.length > 1) {
        const remainTags = this.pageTags.filter((item) => {
          return item.displayName !== name
        })
        console.log('剩余的tag标签数据', remainTags)
        this.$store.dispatch('pageTags', remainTags)
        if (this.currentTag.displayName === name) {
          const target = this.pageTags[this.pageTags.length - 1] || {}
          this.$store.dispatch('currentTag', target)
          window.history.pushState(
            null,
            `${target.system}/#${target.fullPath}`,
            `${target.system}/#${target.fullPath}`
          )
          // this.$router.push(`/${target.system}/#${target.fullPath}`)
        }
      } else {
        this.$store.dispatch('pageTags', [])
        this.$store.dispatch('currentTag', {})
        // TODO:跳转至默认的首页，从配置项获取
      }
    },
  },
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
<style lang="scss" rel="stylesheet/scss" type="text/scss" scoped>
#pageTags {
  border-bottom: 1px solid #ebebeb;
  box-shadow: 1px 2px 4px #ebebeb;
  .scroll-container {
    white-space: nowrap;
    position: relative;
    overflow: hidden;
    width: 100%;
    padding: 10px;
    background: #f1d2bc;
    // line-height: 30px;
    /deep/ .el-scrollbar_bar {
      bottom: 0;
    }
    /deep/ .el-scrollbar__wrap {
      height: 37px;
      width: 100%;
      overflow: hidden;
      .el-scrollbar__view {
        float: left;
      }
    }
    /deep/ .el-scrollbar__bar.is-horizontal {
      bottom: -1px;
    }
  }
}
</style>
