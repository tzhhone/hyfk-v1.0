<template>
  <div class="home">
    <el-tabs type="border-card">
      <el-tab-pane>
        <template #label>
          <span><i class="el-icon-date"></i>浏览器查询</span>
        </template>
        <!-- <el-empty description="无数据"></el-empty> -->
        <el-table :data="tableData" style="width: 100%">
          <el-table-column type="expand">
            <template #default="props">
              <el-form label-position="left" inline class="demo-table-expand">
                <el-form-item label="⚡商品 ID">
                  <span>{{ props.row.id }}</span>
                </el-form-item>
                <el-form-item label="商品名称">
                  <span>{{ props.row.name }}</span>
                </el-form-item>
                <el-form-item label="🕓购买时间">
                  <span>{{ props.row.date }}</span>
                </el-form-item>
                <el-form-item label="key">
                  <span>{{ props.row.key }}</span>
                </el-form-item>
                <el-form-item label="💳购买价格">
                  <span>{{ props.row.price }}</span>
                </el-form-item>
                <el-form-item label="购买件数">
                  <span>{{ props.row.num }}</span>
                </el-form-item>
                <el-form-item label="商品描述">
                  <span>{{ props.row.desc }}</span>
                </el-form-item>
              </el-form>
            </template>
          </el-table-column>
          <el-table-column label="商品 ID" prop="id"> </el-table-column>
          <el-table-column label="商品名称" prop="name"> </el-table-column>
          <el-table-column label="操作" prop="scope">
            <template #default="scope">
              <el-button
                size="mini"
                v-clipboard:copy="scope.row.key"
                v-clipboard:success="onSuccess"
                v-clipboard:error="onError"
                >复制</el-button
              >

              <a
                :href="'http://wpa.qq.com/msgrd?v=3&uin='+scope.row.qq+'&site=qq&menu=yes'"
                target="_blank"
                style="color: azure;margin-left: 10px;"
              >
                <el-button size="mini" type="danger">售后</el-button>
              </a>
            </template>
          </el-table-column>
        </el-table>
      </el-tab-pane>

      <el-tab-pane label="订单号查询">
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
              <el-button type="primary" @click="onSubmit">查询</el-button>
            </el-form-item>
          </el-form>
        </div>
      </el-tab-pane>
      <el-tab-pane label="信息查询">
        <el-empty description="无数据"></el-empty>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<style>
.demo-table-expand {
  font-size: 0;
}
.demo-table-expand label {
  width: 90px;
  color: #99a9bf;
}
.demo-table-expand .el-form-item {
  margin-right: 0;
  margin-bottom: 0;
  width: 50%;
}
</style>
<script>
export default {
  name: "search",
  data() {
    return {
      form: {
        user: "",
      },

      tableData: [
        {
          id: "12987122",
          name: "[官方]推荐服务",
          date: "2021-4-6 19:36",
          desc: "荷兰优质淡奶，奶香浓而不腻",
          price: "140",
          key: "djasklfjdlkafas",
          num: 1,
          qq: "754709381",
        },
      ],
    };
  },
  mounted() {

  },
  methods: {
    onSuccess() {
      this.$notify({
        title: "成功",
        message: "复制成功，根据商品描述粘贴使用吧",
        type: "success",
      });
    },
    onError() {
      this.$notify.error({
        title: "错误",
        message: "复制失败，请手动复制key",
      });
    },
  },
};
</script>

<style>
.form-search {
  margin-right: auto;
  margin-left: auto;
  max-width: 280px;
}
</style>