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
      <el-divider v-show="showShop" id="shop"></el-divider>

      <div class="tz-title" v-show="showShop">
        <i class="el-icon-menu">
          <p>商品详情</p>
        </i>
      </div>
      <div v-show="showShop">
        <el-skeleton :throttle="300" :loading="loading" animated>
          <template #template>
            <div>
              <el-skeleton-item
                variant="text"
                style="height: 28px;margin-bottom: 18px;"
              />
              <el-skeleton-item
                variant="text"
                style="height: 28px;margin-bottom: 18px;"
              />
              <el-skeleton-item
                variant="text"
                style="height: 28px;margin-bottom: 18px;"
              />
              <el-skeleton-item
                variant="text"
                style="height: 28px;margin-bottom: 18px;"
              />
              <el-skeleton-item
                variant="text"
                style="height: 28px;margin-bottom: 18px;"
              />
              <el-skeleton-item
                variant="text"
                style="height: 28px;margin-bottom: 18px;"
              />
            </div>
          </template>
          <template #default>
            <el-alert title="商品公告" type="success" :closable="false">
              <p>本项目靠爱发电，如果觉得对您有帮助，何不请作者喝瓶冰阔乐</p>
            </el-alert>

            <el-form
              ref="form"
              style="margin-top: 10px;"
              :model="form"
              label-width="80px"
              size="mini"
            >
              <el-form-item label="商品名称">
                <el-input
                  class="tz-shop-title"
                  v-model="shopData.name"
                  disabled
                ></el-input>
              </el-form-item>
              <el-form-item label="商品价格">
                <el-input
                  class="tz-shop-title"
                  v-model="shopData.min"
                  disabled
                ></el-input>
              </el-form-item>
              <el-form-item label="发货方式">
                <el-tag>自动发货</el-tag>
              </el-form-item>
              <el-form-item label="购买数量">
                <el-input-number
                  v-model="num"
                  @change="handleChange"
                  :min="1"
                  :max="shopData.num"
                  label="描述文字"
                ></el-input-number>
              </el-form-item>
              <el-form-item label="联系方式">
                <el-input
                  placeholder="请填写您的QQ号或手机号方便查询"
                  :clearable="true"
                  v-model="form.name"
                ></el-input>
              </el-form-item>
              <el-form-item label="查询密码">
                <el-input
                  type="password"
                  placeholder="请填写设置您的查询密码"
                  :show-password="true"
                  v-model="form.searchPass"
                ></el-input>
              </el-form-item>
            </el-form>
          </template>
        </el-skeleton>
      </div>
    </el-card>
    <el-card class="box-card" style="margin-top: 15px">
      <div class="tz-title">
        <i class="el-icon-menu"></i>
        <p>支付方式</p>
      </div>
      <card-pay
        :data="data2"
        :cardKey="cardPayKey"
        v-on:card-click="handleSelectPay"
      ></card-pay>
    </el-card>
    <el-input
      type="button"
      class="tz-input-button"
      style="margin-top: 10px;"
      v-model="inputText"
      v-show="buttonShow"
      id="boom"
    ></el-input>
  </div>
</template>

<script>
// @ is an alias to /src

import CardSelect from "../components/module/card/CardSelect.vue";
import CardSelectShop from "../components/module/card/CardSelectShop.vue";
import CardPay from "../components/module/card/CardPay.vue";
export default {
  components: { CardSelect, CardSelectShop, CardPay },
  name: "home",
  data() {
    return {
      form: {
        name: "",
        searchPass: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: "",
      },
      inputText: "提交订单",
      num: 1,
      cardKey: 1,
      cardShopKey: 0,
      cardPayKey:0,
      shopData: {},
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
          place: "售后请加QQ：754709381",
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
      data2: [
        { id: 1, name: "支付宝", img: "icon-zhifubao" },
        { id: 2, name: "微信支付", img: "icon-weixinzhifu1" },
        { id: 3, name: "银联支付", img: "icon-zhifupingtai-yinlian" },
        { id: 4, name: "PayPal", img: "icon-paypal" },
        { id: 5, name: "数字货币支付", img: "icon-shejiaotubiao-33" },
      ],
      showShop: false,
      loading: false,
      buttonShow: false,
    };
  },

  mounted() {},
  methods: {
    handleSelect() {
      // 拉取当前选择目录下的商品列表
    },
    handleSelectShop(key) {
      // 拉取当前选择商品的商品详情
      this.showShop = true;
      this.loading = true;

      // 锚点跳转
      location.href = "#shop";
      setTimeout(() => {
        this.loading = false;
      }, 1000);
      // 是否出现下单按钮
      if(this.cardPayKey != 0){
        this.buttonShow = true;
        
      }
      if (this.data1[key - 1].place != null && this.cardShopKey != key) {
        this.$notify({
          title: "消息",
          dangerouslyUseHTMLString: true,
          message: this.data1[key - 1].place,
          type: "warning",
        });
      }
      this.cardShopKey = key;

      this.shopData = JSON.parse(JSON.stringify(this.data1[key - 1]));
      this.shopData.price = this.data1[key - 1].min;
    },
    handleSelectPay(key) {
      //这里检查之前表单是否有误，并判断当前环境是否需要验证。
      if (this.showShop == false) {
        this.$notify({
          title: "消息",
          dangerouslyUseHTMLString: true,
          message: "请先选择商品",
          type: "warning",
        });
        
      } else {
        this.buttonShow = true;
        location.href = "#boom";
      }
      this.cardPayKey = key;
    },

    handleChange(value) {
      //更新商品价格
      this.shopData.min = this.shopData.price * value;
    },
  },
};
</script>

<style>
.el-input.tz-shop-title.is-disabled .el-input__inner {
  border-color: #2e57ce;
  color: #2590b8;
  cursor: not-allowed;
}

.el-input.tz-input-button .el-input__inner {
  background-color: #2e56cee1;
  color: #fff;
  cursor: pointer;
}
.el-input.tz-input-button .el-input__inner:hover {
  background-color: #2e56cec7;
}
.el-input.tz-input-button .el-input__inner:active {
  background-color: #2e56ce;
}
</style>
