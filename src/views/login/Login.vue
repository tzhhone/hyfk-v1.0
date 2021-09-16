<!--
 * @Description: 
 * @Version: 1.0
 * @Autor: tzhhone
 * @Date: 2021-09-14 09:31:30
 * @LastEditors: tzhhone
 * @LastEditTime: 2021-09-16 17:13:02
-->

<template>
    <div class="form-main">
        <el-form :model="ruleForm" status-icon :rules="rules" :label-position="labelPosition" label-width="auto"
            ref="ruleForm" class="demo-ruleForm">
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
                <el-button type="primary" @click="submitForm('ruleForm')" style="width: 100%;">登录</el-button>
            </el-form-item>
        </el-form>
    </div>

</template>

<script>
    export default {
        data() {
            return {
                labelPosition: 'left',
                ruleForm: {
                    user: "",
                    password: "",
                },
                rules: {

                    user: [
                        { reuired: true, message: "请输入用户名", trigger: 'blur' },
                        { min: 5, message: "长度不能小于 5 个字符", trigger: 'blur' }
                    ],
                    password: [
                        { reuired: true, message: "请输入密码", trigger: 'blur' },
                        { min: 8, message: "长度不能小于 8 个字符", trigger: 'blur' }
                    ]
                }
            }
        },
    };
</script>

<style>
</style>