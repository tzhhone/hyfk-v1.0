<template>
  <div class="home">
    <el-card shadow="always">
      <div class="tz-title">
        <i class="el-icon-menu"></i>
        <p>帮助</p>
        <span> - 解决您目前遇到的问题 😋</span>
      </div>
      <div>
        <el-row :gutter="10">
          <el-col
            :xs="12"
            :sm="8"
            :md="6"
            :lg="4"
            :xl="4"
            v-for="item in cardData"
            :key="item.id"
          >
            <div class="tz-card-help" @click="onHelp(item.id)">
              <el-card shadow="hover">
                <p>{{ item.title }}</p>
              </el-card>
            </div>
          </el-col>
        </el-row>
      </div>
    </el-card>
    <el-card shadow="always" style="margin-top: 15px">
      <div class="tz-title">
        <i class="el-icon-menu"></i>
        <p>最近订单</p>
      </div>
      <div>
        <el-empty description="无数据">
          <el-button type="primary" @click="onDdButton" round
            >没有显示？我有订单信息</el-button
          >
        </el-empty>
      </div>
    </el-card>
    <el-card shadow="always" style="margin-top: 15px">
      <div class="tz-title">
        <i class="el-icon-menu"></i>
        <p>订单号投诉</p>
        <span> - 处理时间平均为 3 小时 🕓</span>
      </div>
      <div>
        <el-empty description="无数据">
          <el-button type="primary" @click="onHzButton" round
            >没有显示？我有投诉回执号</el-button
          >
        </el-empty>
      </div>
    </el-card>
  </div>
</template>

<style>
.tz-card-help {
  margin-top: 4px;
  cursor: pointer;
}
.tz-card-help .el-card {
  border: 1px solid #4266bb;
}
.tz-card-help p {
  margin: 0;
  text-align: center;
}
</style>

<script>
import store from "../store/";


export default {
  name: "complain",
  data() {
    return {
      cardData: [
        {
          id: 1,
          title: "🚚发货问题",
        },
        {
          id: 2,
          title: "📃订单问题",
        },
        {
          id: 3,
          title: "💡卡密问题",
        },
        {
          id: 4,
          title: "💰资金问题",
        },
        {
          id: 5,
          title: "💸退款问题",
        },
      ],
    };
  },

  methods: {
    onHelp(id) {
      this.cardData.some((element) => {
        if (element.id == id) {
          
          store.commit("help/addHelpData", element);
          this.$router.push("/help");

          return true;
        }
      });
    },
    onDdButton() {
      this.$prompt("请输入您的订单号", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        inputPlaceholder: "请输入您的订单号",
      })
        .then(({ value }) => {
          this.$message({
            type: "success",
            message: "你的邮箱是: " + value,
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "取消输入",
          });
        });
    },
    onHzButton() {
      this.$prompt("请输入您的投诉回执", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        inputPlaceholder: "请输入您的投诉回执",
      })
        .then(({ value }) => {
          this.$message({
            type: "success",
            message: "你的邮箱是: " + value,
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "取消输入",
          });
        });
    },
  },
};
</script>

<style>
</style>