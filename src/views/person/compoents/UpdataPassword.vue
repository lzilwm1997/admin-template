<template>
  <div>
    <el-dialog title="修改密码" :visible.sync="dialogFormVisible" :show-close="false" width="500px">
      <el-form ref="setPassword" :model="form" :rules="rules">
        <el-form-item label="原始密码" prop="oldPassword">
          <el-input v-model="form.oldPassword" />
        </el-form-item>
        <el-form-item label="新的密码" prop="newPassword">
          <el-input v-model="form.newPassword" />
        </el-form-item>
        <el-form-item label="确认密码" prop="surePssword">
          <el-input v-model="form.surePssword" />
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="cancle">取 消</el-button>
        <el-button type="primary" @click="onSuccess">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    const confirmPass = (rule, value, callback) => {
      if (value) {
        if (this.form.newPassword !== value) {
          callback(new Error('两次输入的密码不一致'))
        } else {
          callback()
        }
      } else {
        callback(new Error('请再次输入密码'))
      }
    }
    return {
      rules: {
        oldPassword: [
          { required: true, message: '请输入旧密码', trigger: 'blur' },
          { min: 6, max: 20, message: '长度在 6 到 20 个字符', trigger: 'blur' }
        ],
        newPassword: [
          { required: true, message: '请输入新密码', trigger: 'blur' },
          { min: 6, max: 20, message: '长度在 6 到 20 个字符', trigger: 'blur' }
        ],
        surePssword: [{ required: true, validator: confirmPass, trigger: 'blur' }]
      },
      dialogFormVisible: false,
      form: {}
    }
  },
  methods: {
    onSuccess() {
      alert('更新密码')
      // 更新密码Api...

      // 成功后跳转登录页面
    },
    cancle() {
      this.$refs.setPassword.resetFields()
      this.dialogFormVisible = false
      this.form = {}
    }
  }
}
</script>
