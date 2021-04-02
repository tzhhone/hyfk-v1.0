<template>
  <div class="home">
    <el-tabs type="border-card">
      <el-tab-pane>
        <template #label>
          <span><i class="el-icon-date"></i>浏览器查询</span>
        </template>
        <el-empty description="无数据"></el-empty>
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

<script>
export default {
  name: "search",
  data() {
    return {
      form: {
        user: "",
      },
    };
  },
};
</script>

<style>
.form-search{
    margin-right: auto;
    margin-left: auto;
    max-width: 280px;
}
</style>