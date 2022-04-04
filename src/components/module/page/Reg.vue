<template>
  <div class="tz-back">
    <div class="form-main tz-login-wrap">
      <div class="tz-header">
        <span>注册</span>

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
        <el-form-item placeholder="请输入账号" prop="user">
          <el-input
            placeholder="请输入账号"
            type="user"
            v-model="ruleForm.user"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item placeholder="请输入密码" prop="password">
          <el-input
            placeholder="请输入密码"
            type="password"
            v-model="ruleForm.password"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item prop="retpassword">
          <el-input
            placeholder="请确认密码"
            type="retpassword"
            v-model="ruleForm.retpassword"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <!-- <el-form-item prop="code">
          <el-input
            type="text"
            v-model="ruleForm.code"
            placeholder="验证码"
            autocomplete="off"
          >
            <template #append>
              <div>
                <el-button @click="send" :disabled="codeDisabled">{{ codeText }}</el-button>
              </div>
            </template>
          </el-input>
        </el-form-item> -->
        <el-form-item>
          <el-button
            type="primary"
            @click="submitForm('ruleForm')"
            style="width: 100%"
            >注册</el-button
          >
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  name: "Reg",
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
      codeText:"发送",
      codeDisabled:false,
      ruleForm: {
        user: "",
        password: "",
        retpassword: "",
        // code: "",
      },
      rules: {
        user: [
          { required: true, message: "请输入账号", trigger: "blur" },
          { min: 5, message: "长度不能小于 5 个字符", trigger: "blur" },
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
          { min: 8, message: "长度不能小于 8 个字符", trigger: "blur" },
        ],
        retpassword: [
          { required: true, validator: validatePass, trigger: "blur" },
        ],
        // code: [
        //   { required: true, message: "请输入验证码", trigger: "blur" },
        //   { min: 5, message: "长度不能小于 5 个字符", trigger: "blur" },
        // ],
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
    close() {
      this.$emit("close", true);
    },
    send() {
      this.codeDisabled = true;
      this.codeText = 60;
      var x = setInterval(()=>{
        this.codeText--;
        if(this.codeText <= 0){
          this.codeText = "发送";
          this.codeDisabled = false;
          clearInterval(x);
        }
      },1000)
      this.$emit("send", true);
    },
  },
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
.tz-header span {
  font-size: 18px;
  font-weight: 600;
}
.tz-close:hover {
  cursor: pointer;
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