<template>
  <div class="home" ref="home">
    <el-alert title="公告" type="success" :closable="false">
      <p>这里是辉耀发卡官方demo站。所有商品仅供测试。并无实际商品。1234</p>
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
                style="height: 28px; margin-bottom: 18px"
              />
              <el-skeleton-item
                variant="text"
                style="height: 28px; margin-bottom: 18px"
              />
              <el-skeleton-item
                variant="text"
                style="height: 28px; margin-bottom: 18px"
              />
              <el-skeleton-item
                variant="text"
                style="height: 28px; margin-bottom: 18px"
              />
              <el-skeleton-item
                variant="text"
                style="height: 28px; margin-bottom: 18px"
              />
              <el-skeleton-item
                variant="text"
                style="height: 28px; margin-bottom: 18px"
              />
            </div>
          </template>
          <template #default>
            <el-alert
              title="商品公告"
              type="success"
              :closable="false"
              v-if="shopData.place"
            >
              <p>{{ shopData.place }}</p>
            </el-alert>

            <el-form
              ref="form"
              style="margin-top: 10px"
              :model="form"
              label-width="80px"
            >
              <el-form-item label="商品名称">
                <el-select
                  v-model="ShopKey"
                  class="m-2"
                  placeholder="Select"
                  @change="selectChange"
                >
                  <el-option
                    v-for="item in shopDataArr"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  />
                </el-select>
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
              <!-- <el-form-item label="联系方式">
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
              </el-form-item> -->
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
      style="margin-top: 10px"
      v-model="inputText"
      v-show="buttonShow"
      @click="onPay"
      id="boom"
    ></el-input>
  </div>
  <el-dialog v-model="centerDialogVisible" title="支付" :width="isMobile ? '100%':'35%'" center>
    <div style="text-align: center;">
      <span>请使用微信扫一扫,支付</span><span style="font-weight:700;font-size:18px;color:red;"> {{ pay.coin }} </span><span>元</span>
      <div style="display: flex;justify-content: center;">
        <el-image style="width: 150px; height: 150px;" :src="pay.url_qrcode" fit="支付二维码" />
      </div>
      
      
    </div>

    <template #footer>
      <span class="dialog-footer">
        <el-button @click="centerDialogVisible = false">取消</el-button>
        <el-button type="primary" @click="centerDialogVisible = false"
          >我已支付</el-button
        >
      </span>
    </template>
  </el-dialog>
</template>

<script>
import CardSelect from "../components/module/card/CardSelect.vue";
import CardSelectShop from "../components/module/card/CardSelectShop.vue";
import CardPay from "../components/module/card/CardPay.vue";
import { getClassesLabel } from "@/services/shop/classes";
import { getClassesShopLabel } from "@/services/shop/classesShop";
import { getShopLabel } from "@/services/shop/shop";
import { pay } from "@/services/pay/pay";
import _ from 'lodash'
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
      isMobile:this.$store.state.setting.isMobile,
      pay:{
        url_qrcode:"https://api.xunhupay.com/payments/wechat/qrcode?id=20217000465&nonce_str=7017664999&time=1649067997&appid=201906145235&hash=684677d54d2ea4380c48ae450078341c",
      },
      user: [],
      centerDialogVisible: false,
      inputText: "提交订单",
      
      num: 1,
      cardKey: 1,
      cardShopKey: 0,
      cardPayKey: 0,
      shopData: {},
      shopDataArr: [],
      ShopKey: 0,
      data: [],
      data1: [],
      data2: [
        // { id: 1, name: "支付宝", img: "icon-zhifubao" },
        { id: 1, name: "微信支付", img: "icon-weixinzhifu1" },
        // { id: 3, name: "银联支付", img: "icon-zhifupingtai-yinlian" },
        // { id: 4, name: "PayPal", img: "icon-paypal" },
        // { id: 5, name: "数字货币支付", img: "icon-shejiaotubiao-33" },
      ],
      showShop: false,
      loading: false,
      buttonShow: false,
    };
  },

  mounted() {
    this.classes();
    this.handleSelect(this.cardKey);
    
  },
  methods: {
    classes() {
      getClassesLabel().then((res) => {
        const data = res.data;
        if (data.status == 200) {
          //成功
          this.data = data.data;
        }
      });
    },
    handleSelect(key) {
      // 拉取当前选择目录下的商品列表
      this.cardKey = key;
      getClassesShopLabel(key).then((res) => {
        const data = res.data;
        if (data.status == 200) {
          //成功
          this.data1 = data.data;
        }
      });
    },
    handleSelectShop(key, num) {
      // 拉取当前选择商品的商品详情

      this.showShop = true;
      this.loading = true;

      // 锚点跳转
      location.href = "#shop";

      // 是否出现下单按钮
      if (this.cardPayKey != 0) {
        this.buttonShow = true;
      }

      if (this.data1[num].place != null && this.cardShopKey != key) {
        this.$notify({
          title: "消息",
          dangerouslyUseHTMLString: true,
          message: this.data1[num].place,
          type: "warning",
        });
      }
      this.cardShopKey = key;

      //this.shopData = JSON.parse(JSON.stringify(this.data1[num]));
      //this.shopData.price = this.data1[num].min;
      getShopLabel(key).then((res) => {
        const data = res.data;
        if (data.status == 200) {
          //成功

          this.shopDataArr = data.data;

          if (data.data.length > 0) {
            this.ShopKey = data.data[0].value;
            this.shopData = data.data[0];
            this.shopData.min = data.data[0].price;
          } else {
            this.$message.error("此分类下暂无商品");
          }
        }
        this.loading = false;
      });
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
    //选择器选择
    selectChange(val) {
      this.shopDataArr.forEach((element) => {
        if (element.value == val) {
          this.shopData = element;
          this.shopData.min = element.price;
        }
      });
    },
    handleChange(value) {
      //更新商品价格

      
      this.shopData.count = value;
      this.shopData.min = _.ceil(_.multiply(this.shopData.price,value),2);
    },
    onPay() {
      console.log(
        this.shopData.value,
        this.shopData.count ? this.shopData.count : 1
      );
      pay(this.shopData.value, this.shopData.count ? this.shopData.count : 1).then(
        (res) => {
          const data = res.data;
          if(data.status == 200){
            this.centerDialogVisible = true;
            this.pay = data.data;
          }
          
          
        }
      );
      console.log(this.shopData);
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
