<template>
  <div>
    <el-form>
      <el-form-item label="新的密码">
        <el-input v-model="forget.password" placeholder="6-18位数字或字母" type="password" />
      </el-form-item>
      <el-form-item label="确认密码">
        <el-input v-model="forget.passwordSure" placeholder="再次输入密码" type="password" />
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
      forget: {
        password: '',
        passwordSure: ''
      }
    }
  },
  methods: {
    ...mapMutations('forget', { setAction: 'SET_ACTION' }),
    handleNext() {
      this.setAction(4)
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
</style>
