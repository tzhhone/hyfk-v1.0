<template>
  <div>
    <el-container>
      <el-header style="background-color: rgb(84, 92, 100);">
        <el-affix :position="top">
          <div class="tz-container">
            <div class="tz-logo">
              <a href="/">
                <el-avatar src="/logo.png" image-size="48"></el-avatar>

                <span
                  style="color: aliceblue;font-size: 19px;font-weight: bold;position: relative;left: 9px;bottom: 12px;"
                  >辉耀发卡网</span
                >
              </a>
            </div>
            <div class="tz-menu-iphone">
              <i
                class="el-icon-s-fold"
                style="color:aliceblue;font-size: 26px;"
                @click="drawer = true"
              ></i>
              <!-- 右侧边连 -->
              <el-drawer
                title="菜单"
                v-model="drawer"
                :direction="direction"
                :before-close="handleClose"
                :with-header="false"
                destroy-on-close
              >
                <span>我来啦!</span>
              </el-drawer>
            </div>
            <div class="tz-menu">
              <el-menu
                :default-active="activeIndex"
                class="el-menu-demo"
                mode="horizontal"
                @select="handleSelect"
                background-color="#545c64"
                text-color="#fff"
                active-text-color="#ffd04b"
              >
                <el-menu-item index="1">购买商品</el-menu-item>
                <el-menu-item index="2"> 查询订单 </el-menu-item>
                <el-menu-item index="3"> 订单投诉 </el-menu-item>
                <el-menu-item index="4">联系客服</el-menu-item>
                <el-menu-item index="5">注册</el-menu-item>
                <el-button
                  type="success"
                  style="margin: 8px;box-shadow:0px 0px 10px #000;"
                  round
                  >登录</el-button
                >
              </el-menu>
            </div>
          </div>
        </el-affix>
      </el-header>

      <el-main>
        Main
        <HelloWorld msg="Welcome to Your Vue.js App" />
      </el-main>
    </el-container>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
  },
  data() {
    return {
      activeIndex: "1",

      drawer: false,
      direction: "rtl",
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
  },
};
</script>

<style>
body {
  margin: 0;
}

.tz-container {
  position: relative;
  margin-left: auto;
  margin-right: auto;
  height: 60px;
  max-width: 1140px;
}
.tz-menu {
  float: right;
}
.tz-menu-iphone {
  float: right;
  margin: 15px 0;
  visibility: hidden;
}
.tz-logo {
  display: inline-block;
  float: left;
  margin: 8px 0;
}
.el-main {
  margin-left: auto;
  margin-right: auto;
}

@media screen and (max-width: 1200px) {
  .tz-container {
    max-width: 1140px;
    padding: 0 15px 0 15px;
  }
}
@media screen and (max-width: 992px) {
  .tz-container {
    max-width: 960px;
    padding: 0 15px 0 15px;
  }
}

@media screen and (max-width: 768px) {
  .tz-container {
    max-width: 720px;
    padding: 0 15px 0 15px;
  }
  .tz-menu {
    visibility: hidden;
  }
  .tz-menu-iphone {
    visibility: visible;
  }
}

@media screen and (max-width: 576px) {
  .tz-container {
    max-width: 536px;
    padding: 0 15px 0 15px;
  }
  .tz-menu {
    visibility: hidden;
  }
  .tz-menu-iphone {
    visibility: visible;
  }
}
</style>
