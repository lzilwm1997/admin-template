<template>
  <div>
    <el-form v-if="!isSendCode" ref="forgetTelForm" :model="forget" label-position="top" label-width="80px" :rules="forgetTelRules">
      <el-form-item label="请输入您绑定的手机号" prop="tel">
        <p class="info">136*******</p>
        <el-input v-model="forget.tel" placeholder="完整的手机号" type="text" />
      </el-form-item>
      <el-button type="primary" @click="inputCode">确定</el-button>
    </el-form>
    <div v-if="isSendCode">
      <el-form ref="forgetCodeForm" :model="forget" label-position="top" label-width="80px" :rules="forgetTelRules">
        <p>请用密保手机136********获取短信验证码</p>
        <el-button @click="getCode">免费获取验证码</el-button>
        <el-form-item label="验证码" prop="code">
          <el-input v-model="forget.code" class="code-input" placeholder="验证码" />
        </el-form-item>
        <el-button type="primary" @click="handleNext">确定</el-button>
      </el-form>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  data() {
    return {
      forgetTelRules: {
        tel: [{ required: true, trigger: 'blur', message: '请输入手机号' }],
        code: [{ required: true, trigger: 'blur', message: '请输入手机号' }]
      },
      isSendCode: false,
      forget: {
        tel: '',
        code: ''
      }
    }
  },
  methods: {
    ...mapMutations('forget', { setAction: 'SET_ACTION' }),
    inputCode() {
      this.$refs.forgetTelForm.validate(valid => {
        if (valid) {
          console.log('ok')
          // 异步验证手机号是否正确....
          this.isSendCode = true
        } else {
          console.log('验证错误')
        }
      })
    },
    getCode() {
      alert('获取验证码')
    },
    handleNext() {
      // 异步验证手机验证码通过后下一步...
      console.log('ok')
      this.setAction(3)
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
::v-deep .el-form-item__label {
  padding: 0;
  font-size: 16px;
}
</style>

<style lang="scss" scoped>
.info {
  font-size: 16px;
  color: #ccc;
}
</style>
