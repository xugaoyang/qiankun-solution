<template>
  <div id="login" class="w-full h-full">
    <div class="login-wrapper">
      <el-form
        :model="loginParams"
        :rules="loginRules"
        ref="loginForm"
        :label-position="'left'"
        label-width="80px"
      >
        <el-form-item label="账户" prop="username">
          <el-input
            type="text"
            size="small"
            v-model="loginParams.username"
            placeholder="请输入账户"
          ></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input
            type="password"
            size="small"
            v-model="loginParams.password"
            placeholder="请输入密码"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" size="small" class="w-full" @click="login()">登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'login',
  data() {
    return {
      loginParams: {
        username: '',
        password: '',
      },
      loginRules: {
        username: [
          {
            required: true,
            message: '请输入用户名',
            trigger: 'blur',
          },
        ],
        password: [{ required: true, message: '请输入密码', trigger: 'blur' }],
      },
    }
  },
  computed: {},
  methods: {
    login() {
      this.$refs.loginForm.validate((valid) => {
        if (valid) {
          if (this.loginParams.username === 'admin' && this.loginParams.password === '123456') {
            // TODO:跳转至微应用首页, 最好从配置项获取
            // TODO:获取用户信息缓存至state
            this.$router.push('/vue-a')
          } else {
            this.$message.warning('用户名或密码错误')
          }
        }
      })
    },
  },
  created() {},
}
</script>

<style lang="scss" scoped>
#login {
  background: url(../assets/login_bg.jpg) 0 0 no-repeat;

  .login-wrapper {
    width: 300px;
    height: 200px;
    position: absolute;
    top: 50%;
    left: 20%;
    transform: translateY(-50%);
    /deep/ .el-input__inner {
      background-color: rgba(255, 255, 255, 0.3);
      color: #fff;
    }
    /deep/ .el-form-item__label {
      color: #fff;
    }
  }
}
</style>
