<!--
 * @Description: 登录页面组建
 * @Version: 1.0
 * @Autor: tzhhone
 * @Date: 2021-10-28 09:45:00
 * @LastEditors: tzhhone
 * @LastEditTime: 2021-11-17 09:33:29
-->

<template>
  <div class="tz-back">
    <div class="form-main tz-login-wrap">
      <div class="tz-header">
        <span>登录</span>
        <div class="tz-close">
          <div @click="close()"></div>
        </div>
      </div>
      <el-form
        :model="ruleForm"
        status-icon
        :rules="rules"
        :label-position="labelPosition"
        label-width="auto"
        ref="ruleForm"
        class="demo-ruleForm"
      >
        <el-form-item prop="user">
          <el-input
            type="user"
            v-model="ruleForm.user"
            placeholder="账号"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input
            type="password"
            v-model="ruleForm.password"
            placeholder="密码"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item>

          <el-link href="javascript:void(0);" @click="setPasswd" type="primary" :underline="false" style="float: right"
            >忘记密码？</el-link>
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
</div>
</template>

<script>
import { login } from "@/services/user";
import {setAuthorization} from '@/utils/request'
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
        
          login(this.ruleForm.user,this.ruleForm.password).then((res)=>{
            const data = res.data;
            if(data.status == 200){
              this.$store.commit("account/setUser", data.data)
              setAuthorization({token: data.token, expireAt: new Date(Date.now() + 3*24*60*60*1000)})
              
              this.$emit('close',true);
              
            }
            
          }

          )
          
        } else {
          //错误
          return false;
        }
      });
    },
    close(){
      this.$emit('close',true);
    },
    setPasswd(){
      this.$emit('setPasswd',true);
    }
  },
  props: {},
  mounted() {},
};
</script>
<style scoped>
.tz-header {
  position: relative;
  width: 100%;
  height: 28px;
  transform: translate(0%, -115%);
}
/*背景*/
.tz-back {
  position: fixed;

  left: 0;
  top: 0;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  z-index: 100;
}
.tz-close {
  position: absolute;
  right: 0;
  background-color: #ff6666;
  display: inline-block;
  border-radius: 30px;
  padding: 0px 5px;
}
.tz-header span{
    font-size: 18px;
    font-weight: 600;
}
.tz-close:hover {

  cursor:pointer;
  background-color: #3498db;
  transition: all 0.8s ease-in;
}
.tz-close div {
  transform: rotate(0deg);
  width: 15px;
  height: 24px;
}
.tz-close div:hover {
  color: #ff6666;
  transition: all 0.8s ease-in;
  transform: rotate(360deg);
}
.tz-close div::before {
  font-size: 18px;
  content: "\2716";
  color: #ffffff;
}

.tz-login-wrap {
  position: relative;
  border: #000 1px solid;
  background: rgba(255, 255, 255);
  border-radius: 18px;
  padding: 50px 30px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 9999;
}
</style>


