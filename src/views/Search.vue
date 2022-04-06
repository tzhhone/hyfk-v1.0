<template>
  <div class="home">
    <!-- <el-alert title="提示" type="success" :closable="false">
      <p>点击列表箭头可以查看详细信息</p>
    </el-alert> -->
    <el-tabs type="border-card">
      <el-tab-pane>
        <template #label>
          <span><i class="el-icon-date"></i>订单信息</span>
        </template>
        <!-- <el-empty description="无数据"></el-empty> -->
        <el-table :data="tableData" style="width: 100%">
          <el-table-column type="expand">
            <template #default="props">
              <el-form label-position="left" inline>
                <div class="tz-table-form demo-table-expand">
                  <el-form-item label="⚡订单 ID">
                    <span>{{ props.row.id }}</span>
                  </el-form-item>
                  <el-form-item label="商品名称">
                    <span>{{ props.row.name }}</span>
                  </el-form-item>
                  <el-form-item label="💳购买价格">
                    <span>{{ props.row.price }} 元</span>
                  </el-form-item>
                  <el-form-item label="购买件数">
                    <span>{{ props.row.num }}</span>
                  </el-form-item>
                  <el-form-item label="🕓购买时间">
                    <span>{{ props.row.date }}</span>
                  </el-form-item>
                  <el-form-item label="是否绑定">
                    <span style="color: red">{{
                      props.row.type == 0 ? "未绑定" : "已绑定"
                    }}</span>
                  </el-form-item>
                  <template v-if="props.row.type != 0">
                    <el-form-item label="💻绑定机器">
                      <span>{{ props.row.mecode }}</span>
                    </el-form-item>
                    <el-form-item label="是否在线">
                      <span>{{ props.row.ol == 0 ? "不在线" : "在线" }}</span>
                    </el-form-item>
                  </template>

                  <el-form-item label="📋商品描述">
                    <el-scrollbar height="80px">
                      <span>{{ props.row.info }}</span>
                    </el-scrollbar>
                  </el-form-item>
                  <el-form-item label="商品信息">
                    <el-scrollbar height="80px">
                      <span>{{ props.row.cdk }}</span>
                    </el-scrollbar>
                  </el-form-item>
                </div>
              </el-form>
            </template>
          </el-table-column>
          <el-table-column label="⚡订单 ID" prop="id"> </el-table-column>
          <el-table-column label="商品名称" prop="name"> </el-table-column>
          <el-table-column label="💳购买价格" prop="price"> </el-table-column>
          <el-table-column label="操作">
            <template #default="scope">
              <el-button size="mini" @click="toClipboard(scope.row.cdk)"
                >复制</el-button
              >
              <template v-if="scope.row.type != 0 && scope.row.cdb == 0">
                <el-button size="mini" type="danger">换绑</el-button>
              </template>

              <!-- <el-button size="mini" type="danger"
                >售后:{{ scope.row.qq }}</el-button
              > -->
            </template>
          </el-table-column>
        </el-table>
      </el-tab-pane>

      <!-- <el-tab-pane label="订单号查询">
        <div class="form-search">
          <el-form
            :inline="true"
            :model="form"
            class="demo-form-inline"
            size="small"
          >
            <el-form-item label="">
              <el-input
                v-model="form.user"
                placeholder="请输入您的订单号"
              ></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary">查询</el-button>
            </el-form-item>
          </el-form>
        </div>
      </el-tab-pane>
      <el-tab-pane label="信息查询">
        <el-empty description="无数据"></el-empty>
      </el-tab-pane> -->
    </el-tabs>
  </div>
</template>

<style lang="less">
.demo-table-expand .el-form-item label {
  width: 90px !important;
  color: #99a9bf !important;
}
</style>
<style lang="less" scoped>
.tz-table-form {
  margin: 10px 50px;
}
.demo-table-expand {
  font-size: 0;
}

.demo-table-expand .el-form-item {
  margin-right: 0;
  margin-bottom: 0;
  width: 50%;
}
.form-search {
  margin-right: auto;
  margin-left: auto;
  max-width: 280px;
}
</style>
<script>
import { toClipboard } from "@soerenmartius/vue3-clipboard";
import { getlist } from "@/services/pay/pay";
export default {
  name: "search",
  data() {
    return {
      form: {
        user: "",
      },

      tableData: [],
    };
  },
  mounted() {
    this.payList();
  },
  methods: {
    toClipboard(cdk) {
      console.log(cdk);
      if (toClipboard(cdk)) {
        this.$notify({
          title: "成功",
          message: "复制成功，根据商品描述粘贴使用吧",
          type: "success",
        });
      } else {
        this.$notify.error({
          title: "错误",
          message: "复制失败，请手动复制cdk",
        });
      }
    },
    payList() {
      getlist().then((res) => {
        const data = res.data;
        if (data.status == 200) {
          this.tableData = data.data;
          console.log(this.tableData);
        }
      });
    },
  },
};
</script>
