<template>
  <div>
    <el-form ref="forgetForm" :model="forget" label-position="top" label-width="80px" :rules="forgetRules">
      <el-form-item label="账号" prop="username">
        <el-input v-model="forget.username" placeholder="登录账号" type="text" />
      </el-form-item>
      <el-form-item label="验证码" prop="code">
        <el-input v-model="forget.code" class="code-input" placeholder="右侧验证码" />
        <div class="captcha_code">
          <img src="../../../../assets/CreateCode.gif">
        </div>
      </el-form-item>
      <el-button type="primary" @click="handleNext">确定</el-button>
    </el-form>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  data() {
    return {
      forgetRules: {
        username: [{ required: true, trigger: 'blur', message: '请输入账号' }],
        code: [{ required: true, trigger: 'blur', message: '请输入验证码' }]
      },
      forget: {
        username: '',
        code: ''
      }
    }
  },
  methods: {
    ...mapMutations('forget', {
      setAction: 'SET_ACTION'
    }),
    handleNext() {
      this.$refs.forgetForm.validate(valid => {
        if (valid) {
          console.log('ok')
          this.setAction(2)
        } else {
          console.log('输入错误!')
          return false
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.el-form {
  width: 300px;
  margin: 50px auto;
}
.el-button {
  font-size: 16px;
  padding: 12px 40px;
}
.code-input {
  width: 60%;
  ::v-deep .el-input__inner {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
}
</style>

<style lang="scss" scoped>
.captcha_code {
  float: right;
}
</style>
