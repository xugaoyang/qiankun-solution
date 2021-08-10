<template>
  <div class="h-full">
    <el-container class="h-screen">
      <el-aside width="200px" class="bg-blue">
        <SideBar></SideBar>
      </el-aside>
      <el-container>
        <el-header class="bg-deepgray text-white text-left">
          <Header></Header>
        </el-header>
        <el-main class="p-10">
          <PageTags></PageTags>
          <div id="subapps"></div>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script type="text/babel">
import SideBar from "@/components/layout/SideBar";
import Header from "@/components/layout/Header";
import PageTags from "@/components/layout/PageTags";

export default {
  name: "layout",
  components: {
    SideBar,
    Header,
    PageTags
  },
  mixins: [],
  data() {
    return {
    }
  },
  computed: {},
  watch: {},
  async created() {},
  methods: {}
};
</script>
