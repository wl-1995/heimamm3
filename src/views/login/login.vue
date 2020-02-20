<template>
  <div class="login-wrap">
    <div class="login-box">
      <div class="title-box">
        <img src="./images/logo.png" alt class="logo" />
        <span class="left-title">黑马面面</span>
        <span class="line"></span>
        <span class="right-title">用户登录</span>
      </div>
      <el-form
        :model="ruleForm"
        :rules="rules"
        ref="ruleForm"
        label-width="43px"
        class="demo-ruleForm"
      >
        <el-form-item prop="phone">
          <el-input v-model="ruleForm.phone" placeholder="请输入手机号" prefix-icon="el-icon-user"></el-input>
        </el-form-item>

        <el-form-item prop="password">
          <el-input v-model="ruleForm.password" placeholder="请输入密码" prefix-icon="el-icon-lock" show-password></el-input>
        </el-form-item>

        <el-form-item prop="code">
            <el-row>
                <el-col :span="17"><el-input v-model="ruleForm.code" placeholder="请输入验证码" prefix-icon="el-icon-key"></el-input></el-col>
                <el-col :span="7"><img src="./images/code.png" alt="" class="code"></el-col>
            </el-row>
        </el-form-item>

        <el-form-item prop="checked">
          <el-checkbox v-model="ruleForm.checked" class="agree">
              <span class="agree-inner">
                  我已阅读并同意
              <el-link type="primary">用于协议</el-link>和
              <el-link type="primary">隐私条款</el-link>
              </span>
          </el-checkbox>
        </el-form-item>
        
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')" class="box-btn">登录</el-button>
          <el-button type="primary" class="box-btn">注册</el-button>
        </el-form-item>
      </el-form>
    </div>
    <img src="./images/login_banner_ele (1).png" alt />
  </div>
</template>

<script>
export default {
    data() {
      return {
        ruleForm: {
          phone: '',
          password:'',
          code:'',
          checked:false
        },
        rules: {
          phone: [
            { required: true, message: '请输入手机号', trigger: 'blur' },
          ],
          password: [
            { required: true, message: '请输入密码', trigger: 'blur' },
          ],
         code: [
            { required: true, message: '请输入验证码', trigger: 'blur' },
          ],
         checked: [
            { pattern: /true/, message: '请勾选选项', trigger: 'change' },
          ],
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('验证通过!');
          }
        });
      },
    }
  }
</script>

<style lang="less">
.login-wrap {
  width: 100%;
  height: 100%;
  background: linear-gradient(
    225deg,
    rgba(20, 147, 250, 1),
    rgba(1, 198, 250, 1)
  );
  display: flex;
  justify-content: space-around;
  align-items: center;
  .login-box {
    width: 478px;
    height: 550px;
    background: rgba(245, 245, 245, 1);
    box-sizing: border-box;
    padding-right: 41px;
    .title-box {
      display: flex;
      align-items: center;
      margin-top: 48px;
      margin-left: 47px;
      margin-bottom: 43px;
      .logo {
        width: 22px;
        height: 17px;
        margin-right: 16px;
      }
      .left-title {
        font-size: 22px;
        margin-right: 14px;
      }
      .line {
        width: 1px;
        height: 28px;
        background: rgba(199, 199, 199, 1);
        margin-right: 12px;
      }
      .right-title {
        font-size: 21px;
      }
    }
    .code{
        width:100%;
        height:42px;
        vertical-align:top;
    }
    .agree{
        display:flex;
        .agree-inner{
            display:flex;
            align-items:center;
        }
    }
    .box-btn{
        width:100%;
        &:nth-child(2){
            margin-top:26px;
            margin-left:0
        }
    }
  }
}
</style>