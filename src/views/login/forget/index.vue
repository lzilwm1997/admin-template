<template>
  <div class="forget-page">
    <div class="step-box">
      <el-steps :active="action" align-center>
        <el-step title="填写账号" />
        <el-step title="身份验证" />
        <el-step title="填写密码" />
        <el-step title="完成" />
      </el-steps>
    </div>
    <div class="step-page">
      <div v-if="action == 1">
        <forget-form-user />
      </div>
      <div v-if="action == 2">
        <forget-form-tel />
      </div>
      <div v-if="action == 3">
        <forget-form-password />
      </div>
      <div v-if="action == 4">
        <forget-password-success />
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import ForgetFormUser from './components/ForgetFormUser'
import ForgetFormTel from './components/ForgetFormTel'
import ForgetFormPassword from './components/ForgetFormPassword'
import ForgetPasswordSuccess from './components/ForgetPasswordSuccess'
export default {
  name: 'Forget',
  components: { ForgetFormUser, ForgetFormTel, ForgetFormPassword, ForgetPasswordSuccess },
  data() {
    return {
      active: 1
    }
  },
  computed: {
    ...mapGetters(['action'])
  },
  methods: {
    next() {
      if (this.active++ > 2) this.active = 0
    }
  }
}
</script>

<style lang="scss" scoped>
/* reset element-ui css */
.el-steps {
  width: 1000px;
  margin: 0 auto;
}
</style>

<style lang="scss" scoped>
.step-box {
  background: #f5f5f5;
  padding: 20px;
}
.step-page {
  width: 1000px;
  margin: 0 auto;
}
</style>
