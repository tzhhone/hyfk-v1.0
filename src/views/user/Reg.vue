<!--
 * @Description: 注册页面
 * @Version: 1.0
 * @Autor: tzhhone
 * @Date: 2021-09-16 17:37:32
 * @LastEditors: tzhhone
 * @LastEditTime: 2021-09-16 18:39:10
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
      <el-form-item placeholder="请输入用户名" label="用户名" prop="user">
        <el-input
          type="user"
          v-model="ruleForm.user"
          autocomplete="off"
        ></el-input>
      </el-form-item>
      <el-form-item placeholder="请输入密码" label="密码" prop="password">
        <el-input
          type="password"
          v-model="ruleForm.password"
          autocomplete="off"
        ></el-input>
      </el-form-item>
      <el-form-item label="确认密码" prop="retpassword">
        <el-input
            placeholder="请确认密码" 
          type="retpassword"
          v-model="ruleForm.retpassword"
          autocomplete="off"
        ></el-input>
      </el-form-item>
      <el-form-item label="电子邮箱">
          <el-input placeholder="请输入电子邮箱" v-model="ruleForm.email">
          </el-input>
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
</template>

<script>
export default {
  data() {
    var validatePass = (rule, value, callback) => {
      if (!value) {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.ruleForm.password) {
        callback(new Error("两次输入的密码不一致"));
      } else {
        callback();
      }
    };
    return {
      labelPosition: "left",
      ruleForm: {
        user: "",
        password: "",
        retpassword: "",
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
        retpassword: [
          { required: true, validator: validatePass, trigger: "blur" },
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
};
</script>

<style>
</style>