<!--
 * @Description: 登录页面组建
 * @Version: 1.0
 * @Autor: tzhhone
 * @Date: 2021-10-28 09:45:00
 * @LastEditors: tzhhone
 * @LastEditTime: 2021-11-02 18:40:56
-->

<template>
  <div class="tz-back">
    <div class="form-main tz-login-wrap">
      <el-form :model="ruleForm" status-icon :rules="rules" :label-position="labelPosition" label-width="auto"
        ref="ruleForm" class="demo-ruleForm">
        <div class="tz-close">
          <span></span>
        </div>
        
        <el-form-item label="用户名" prop="user">
          <el-input type="user" v-model="ruleForm.user" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input type="password" v-model="ruleForm.password" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item>
          <el-link href="resetpass" type="primary" :underline="false">忘记密码？</el-link>
        </el-form-item>
  
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')" style="width: 100%">登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>


</template>
<style>

  /*背景*/
  .tz-back {
    position: fixed;
    
    left: 0;
    top: 0;
    width: 100%;
    height: 100vh;
    background: rgba(0,0,0,.5);
    z-index: 9998;
  }
  .tz-close{
    position: fixed;
    transform: translate(1000%,-170%);
    
  }
  .tz-close span::before {
      content: "\2716";
  }
  .tz-close span:hover{
    color: red;
  }
  .tz-login-wrap {
    position: relative;
    border: #000 1px solid;
    background: rgba(255, 255, 255);
    border-radius:18px;
    padding: 50px;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    z-index: 9999;

    
  }
</style>

<script>
  export default {
    name: "Login",
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
    mounted() { },
  };
</script>

<style>
</style>