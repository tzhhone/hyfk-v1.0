<template>

  <div class="home">
    
    <el-page-header @back="goBack" :content="data.title != undefined ? data.title:'404'"> </el-page-header>
    <div class="tz-md" id="write">
      <div v-html="content" class="center"></div>
    </div>
  </div>
</template>
<style lang="less" src="../assets/css/md.less" />

<script>

import store from "../store/";
import axios from 'axios';
import showdown from 'showdown'

export default {
  data() {
    return {
      data: store.state.helpData,
      content:""
    };
  },
  created() {
    
    var that = this;
    axios
      .get("static/content/help/" + this.data.id + ".md")
      .then((response) => {
       
        var converter = new showdown.Converter({tables: true,emoji:true});
        var defaultOptions = converter.getOptions();
        console.log(defaultOptions);
        var text      = response.data;
        var html      = converter.makeHtml(text);
        console.log(html);
        that.content = html;
      });
  },
  computed: {
    

  },
  components: {
    //声明组件

  },
  mounted() {

  },
  methods: {
    goBack() {
      this.$router.go(-1);
    },
  },
};
</script>

<style>
</style>