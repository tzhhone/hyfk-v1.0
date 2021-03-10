<template>
  <div class="home" ref="home">
    <el-alert title="公告" type="success" :closable="false">
      <p>这里是辉耀发卡官方demo站。所有商品仅供测试。并无实际商品。</p>
      <p>
        发行包下载github:<a href="https://github.com/assimon/dujiaoka/releases"
          >https://github.com/assimon/dujiaoka/releases</a
        >
        国内网盘下载:
        <a href="https://dujiaoka.lanzous.com/ijAmBk3jbp"
          >https://dujiaoka.lanzous.com/ijAmBk3jbpi</a
        >
      </p>
    </el-alert>

    <el-card class="box-card" style="margin-top: 15px">
      <div class="tz-title">
        <i class="el-icon-menu"></i>
        <p>选择分类</p>
      </div>
      <card-select
        v-on:card-click="handleSelect"
        :data="data"
        :cardKey="cardKey"
      ></card-select>
      <el-divider></el-divider>

      <div class="tz-title">
        <i class="el-icon-menu">
          <p>选择商品</p>
        </i>
      </div>
      <card-select-shop
        v-on:card-click="handleSelectShop"
        :data="data1"
        :cardKey="0"
      ></card-select-shop>
      <el-divider v-show="showShop"></el-divider>

      <div class="tz-title" v-show="showShop">
        <i class="el-icon-menu">
          <p>商品详情</p>
        </i>
        <el-skeleton :throttle="300" :loading="loading" animated>
          <template #template>
            <el-skeleton-item variant="h1" />
            <el-skeleton-item variant="text" />
            <el-skeleton-item variant="text" />
            <el-skeleton-item style="height: 25px;" variant="rect" />
          </template>
          <template #default>
            <h1>你好测试</h1>
          </template>
        </el-skeleton>
      </div>
    </el-card>
  </div>
</template>

<script>
// @ is an alias to /src

import CardSelect from "../components/module/card/CardSelect.vue";
import CardSelectShop from "../components/module/card/CardSelectShop.vue";
export default {
  components: { CardSelect, CardSelectShop },
  name: "Home",
  data() {
    return {
      cardKey: 1,
      data: [
        { id: 1, name: "测试分类", count: 2 },
        { id: 2, name: "[官方]推荐服务", count: 3 },
        { id: 3, name: "[官方]话费充值", count: 198 },
        { id: 4, name: "[官方]影视专区", count: 185 },
        { id: 5, name: "[官方]点卷专区", count: 185 },
      ],
      data1: [
        {
          id: 1,
          name: "测试分类",
          max: 5,
          min: 0.5,
          tags: ["多件优惠", "加群154121"],
          num: 0,
        },
        {
          id: 2,
          name: "[官方]推荐服务",
          max: 100,
          min: 50,
          tags: ["多件优惠", "量大加微信tzhhone"],
          num: 158,
        },
        {
          id: 3,
          name: "[官方]话费充值",
          min: 70,
          tags: ["单次购买100件只需70元"],
          num: 178,
        },
      ],
      showShop: false,
      loading: true,
    };
  },
  mounted() {},
  methods: {
    handleSelect() {},
    handleSelectShop() {
      this.showShop = true;
      this.loading = true;
      this.$nextTick(() => {
        document.documentElement.scrollTop =
          document.documentElement.scrollHeight;
      });
      setTimeout(() => {
        this.loading = false;
      }, 1000);
    },
  },
};
</script>

<style></style>
