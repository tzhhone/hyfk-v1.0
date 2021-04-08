<template>
  <div>
    <el-container>
      <el-header style="padding: 0;">
        <el-affix :position="top">
          <div style="width: 100%;background-color: rgb(84, 92, 100);">
            <div class="tz-container">
              <div class="tz-logo">
                <a href="/">
                  <el-avatar src="/logo.png" image-size="48"></el-avatar>

                  <span
                    style="color: aliceblue;font-size: 19px;font-weight: bold;position: relative;left: 9px;bottom: 12px;"
                    >{{ $_appName }}</span
                  >
                </a>
              </div>
              <div class="tz-menu-iphone">
                <i
                  class="el-icon-s-fold"
                  style="color:aliceblue;font-size: 26px;"
                  @click="drawer = true"
                ></i>
                <!-- 右侧边栏 -->
                <el-drawer
                  title="菜单"
                  v-model="drawer"
                  :direction="direction"
                  :size="150"
                  :with-header="false"
                  destroy-on-close
                >
                  <el-menu
                    :default-active="activeIndex"
                    class="el-menu-vertical-demo"
                    @select="handleSelect"
                    router
                  >
                    <el-menu-item index="/">
                      <i class="el-icon-location"></i>
                      <template #title><span>购买商品</span></template>
                    </el-menu-item>
                    <el-menu-item index="search">
                      <i class="el-icon-search"></i>
                      <template #title>查询订单</template>
                    </el-menu-item>
                    <el-menu-item index="complain">
                      <i class="el-icon-document"></i>
                      <template #title>订单投诉</template>
                    </el-menu-item>
                    <el-menu-item index="4">
                      <i class="el-icon-headset"></i>
                      <template #title>联系客服</template>
                    </el-menu-item>
                    <el-menu-item index="5">
                      <i class="el-icon-info"></i>
                      <template #title>注册</template>
                    </el-menu-item>
                    <el-menu-item index="6">
                      <i class="el-icon-user-solid"></i>
                      <template #title>登录</template>
                    </el-menu-item>
                  </el-menu>
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
                  router
                >
                  <el-menu-item index="/">购买商品</el-menu-item>
                  <el-menu-item index="search">查询订单</el-menu-item>
                  <el-menu-item index="complain">订单投诉</el-menu-item>
                  <el-menu-item index="4">联系客服</el-menu-item>
                  <el-menu-item index="5">注册</el-menu-item>
                  <el-button
                    style="margin: 8px;box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04)"
                    round
                    >登录</el-button
                  >
                </el-menu>
              </div>
            </div>
          </div>
        </el-affix>
      </el-header>

      <el-main>
        <transition name="fade" mode="out-in">
          <router-view></router-view>
        </transition>
      </el-main>
    </el-container>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      activeIndex: "",

      drawer: false,
      direction: "rtl",
    };
  },
  watch: {
    $route: {
      handler() {
        const that = this;
        that.init();
      },
    },
  },
  mounted() {
    
    this.init();
  },
  methods: {
    handleSelect(key) {
      this.activeIndex = key;
    },
    init() {
      
      const path_url = this.$route.path;
      if (path_url !== "/") {
        this.activeIndex = path_url.replace("/", "");
      } else {
        this.activeIndex  =  "/";
      }
    },
  },
};
</script>

<style>
body {
  margin: 0;
}
a {
  text-decoration: None;
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
  display: none;
}
.tz-logo {
  display: inline-block;
  float: left;
  margin: 8px 0;
}
.el-main {
  max-width: 1140px;
  margin-left: auto;
  margin-right: auto;
}
.home {
  width: 1100px;
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
  .home {
    
    width: auto;
  }
}

@media screen and (max-width: 768px) {
  .tz-container {
    max-width: 720px;
    padding: 0 15px 0 15px;
  }
  .tz-menu {
    display: none;
  }
  .tz-menu-iphone {
    display: inline;
  }
  .home {
    width: auto;
  }
}

@media screen and (max-width: 576px) {
  .tz-container {
    max-width: 536px;
    padding: 0 15px 0 15px;
  }
  .tz-menu {
    display: none;
  }
  .tz-menu-iphone {
    display: inline;
  }
  .el-main {
    margin-left: 0;
    margin-right: 0;
  }
  .home {
    width: auto;
  }
}
</style>
