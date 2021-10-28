<!--
 * @Description: 登录页面组建
 * @Version: 1.0
 * @Autor: tzhhone
 * @Date: 2021-10-28 09:45:00
 * @LastEditors: tzhhone
 * @LastEditTime: 2021-10-28 09:55:48
-->

<template>
  <div class="form-main">
    <el-form
      :model="ruleForm"
      status-icon
      :rules="rules"
      :label-position="labelPosition"
      label-width="auto"
      ref="ruleForm"
      class="demo-ruleForm"
    >
      <el-form-item label="用户名" prop="user">
        <el-input
          type="user"
          v-model="ruleForm.user"
          autocomplete="off"
        ></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input
          type="password"
          v-model="ruleForm.password"
          autocomplete="off"
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-link href="resetpass" type="primary" :underline="false"
          >忘记密码？</el-link
        >
      </el-form-item>

      <el-form-item>
        <el-button
          type="primary"
          @click="submitForm('ruleForm')"
          style="width: 100%"
          >登录</el-button
        >
      </el-form-item>
    </el-form>
  </div>
  <div class="tz-back"></div>
</template>
<style>
/*背景*/
#tz-back{
 position:absolute;
 left:0;
 top:0;
 width:100%;
 height:100%;
 background: #000;
 opacity: 0.5;
}
</style>

<script>
export default {
	name:"Login",
  data() {
    return {
      labelPosition: "left",
      ruleForm: {
        user: "",
        password: "",
      },
      rules: {
        user: [
          { required: true, message: "请输入用户名", trigger: "blur" },
          { min: 5, message: "长度不能小于 5 个字符", trigger: "blur" },
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
          { min: 8, message: "长度不能小于 8 个字符", trigger: "blur" },
        ],
      },
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          //登录
        } else {
          //错误
          return false;
        }
      });
    },
  },
  props: {},
  mounted() {},
};
</script>

<style>
</style>
