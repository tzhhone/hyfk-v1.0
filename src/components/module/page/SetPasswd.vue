<!--
 * @Description: 修改密码页
 * @Version: 1.0
 * @Autor: tzhhone
 * @Date: 2021-11-17 09:12:53
 * @LastEditors: tzhhone
 * @LastEditTime: 2021-11-17 11:07:58
-->

<template>
  <div class="tz-back">
    <div class="form-main tz-login-wrap">
      <div class="tz-header">
        <div class="back" @click="back">
          <el-icon style="position: absolute; left: -15px; top: 4.5px"
            ><arrow-left-bold
          /></el-icon>
          <span>修改密码</span>
        </div>

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
        <el-form-item prop="email">
          <el-input
            type="text"
            v-model="ruleForm.email"
            placeholder="邮箱"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item prop="code">
          <el-input
            type="text"
            v-model="ruleForm.code"
            placeholder="验证码"
            autocomplete="off"
          >
            <template #append>
              <div>
                <el-button @click="send" :disabled="codeDisabled">{{
                  codeText
                }}</el-button>
              </div>
            </template>
          </el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input
            type="password"
            v-model="ruleForm.password"
            placeholder="密码"
            autocomplete="off"
          ></el-input>
        </el-form-item>

        <el-form-item prop="setPassword">
          <el-input
            type="password"
            v-model="ruleForm.setPassword"
            placeholder="重复密码"
            autocomplete="off"
          ></el-input>
        </el-form-item>

        <el-form-item>
          <el-button
            type="primary"
            @click="submitForm('ruleForm')"
            style="width: 100%"
            >修改密码</el-button
          >
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import { ArrowLeftBold } from "@element-plus/icons-vue";
import { setPasswdsendCode, setPasswd } from "@/services/user";
export default {
  name: "SetPasswd",
  components: { ArrowLeftBold },
  data() {
    return {
      labelPosition: "left",
      codeText: "发送",
      codeDisabled: false,
      ruleForm: {
        email: "",
        password: "",
        setPassword: "",
        code: "",
        codeToken: "",
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
        setPassword: [
          { required: true, message: "请输入密码", trigger: "blur" },
          { min: 8, message: "长度不能小于 8 个字符", trigger: "blur" },
        ],
        code: [
          { required: true, message: "请输入验证码", trigger: "blur" },
          { min: 4, message: "长度不能小于 4 个字符", trigger: "blur" },
        ],
      },
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          //登录

          setPasswd(
            this.ruleForm.email,
            this.ruleForm.password,
            this.ruleForm.code,
            this.codeToken
          ).then((res) => {
            const data = res.data;
            if (data.status == 200) {
              this.ruleForm = {
                email: "",
                password: "",
                setPassword: "",
                code: "",
                codeToken: "",
              };
              this.$emit("close", true);
            }
          });
        } else {
          //错误
          return false;
        }
      });
    },
    close() {
      this.$emit("close", true);
    },
    back() {
      this.$emit("back", true);
    },
    send() {
      this.codeDisabled = true;
      this.codeText = 60;
      setPasswdsendCode(this.ruleForm.email).then((res) => {
        const data = res.data;
        if (data.status == 200) {
          this.codeToken = data.codeToken;
        }
      });
      var x = setInterval(() => {
        this.codeText--;
        if (this.codeText <= 0) {
          this.codeText = "发送";
          this.codeDisabled = false;
          clearInterval(x);
        }
      }, 1000);
      this.$emit("send", true);
    },
  },

  props: {},
  mounted() {},
};
</script>
<style lang="less" scoped>
@hoverColor: rgba(75, 176, 235);
.tz-header {
  .back {
    display: inline-block;
    &:hover {
      color: @hoverColor;
      cursor: pointer;
    }
  }
}
</style>
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