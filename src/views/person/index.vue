<template>
  <div class="app-container">
    <el-row :gutter="20">
      <el-col :xs="24" :sm="24" :md="8" :lg="6" :xl="5" style="margin-bottom: 10px">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>个人信息</span>
          </div>
          <div>
            <div style="text-align: center">
              <div class="el-upload">
                <img :src="avatar ? avatar : Avatar" title="点击上传头像" class="avatar">
              </div>
            </div>
            <ul class="user-info">
              <li>
                <div style="height: 100%">
                  <svg-icon icon-class="login" /> 登录账号
                  <div class="user-right">161XXXXXXX</div>
                </div>
              </li>
              <li>
                <svg-icon icon-class="user-updata" /> 用户姓名
                <div class="user-right">xxx</div>
              </li>
              <li>
                <svg-icon icon-class="dept" /> 所属部门
                <div class="user-right">XX部门</div>
              </li>
              <li>
                <svg-icon icon-class="phone" /> 手机号码
                <div class="user-right">136XXXXXXX</div>
              </li>
              <li>
                <svg-icon icon-class="email-updata" /> 用户邮箱
                <div class="user-right">XXX@XXX.com</div>
              </li>
              <li>
                <svg-icon icon-class="anq" /> 安全设置
                <div class="user-right">
                  <a @click="$refs.pass.dialogFormVisible = true">修改密码</a>
                </div>
              </li>
            </ul>
          </div>
        </el-card>
      </el-col>
      <el-col :xs="24" :sm="24" :md="16" :lg="18" :xl="19">
        <!--    用户资料    -->
        <el-card class="box-card">
          <el-form ref="form" :model="form" :rules="rules" style="margin-top: 10px;" size="small" label-width="65px">
            <el-form-item label="昵称" prop="nickName">
              <el-input v-model="form.nickName" style="width: 35%" />
              <span style="color: #C0C0C0;margin-left: 10px;">用户昵称不作为登录使用</span>
            </el-form-item>
            <el-form-item label="手机号" prop="phone">
              <el-input v-model="form.phone" style="width: 35%;" />
              <span style="color: #C0C0C0;margin-left: 10px;">手机号码不能重复</span>
            </el-form-item>
            <el-form-item label="性别">
              <el-radio-group v-model="form.gender" style="width: 178px">
                <el-radio label="男">男</el-radio>
                <el-radio label="女">女</el-radio>
              </el-radio-group>
            </el-form-item>
            <el-form-item label="">
              <el-button size="mini" type="primary">保存配置</el-button>
            </el-form-item>
          </el-form>
        </el-card>
      </el-col>
    </el-row>
    <updata-password ref="pass" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Avatar from '@/assets/404_images/404.png'
import UpdataPassword from './compoents/UpdataPassword'
import { isvalidPhone } from '@/utils/validate'
export default {
  name: 'Center',
  components: { UpdataPassword },
  //   mixins: [crud],
  data() {
    // 自定义验证
    const validPhone = (rule, value, callback) => {
      if (!value) {
        callback(new Error('请输入电话号码'))
      } else if (!isvalidPhone(value)) {
        callback(new Error('请输入正确的11位手机号码'))
      } else {
        callback()
      }
    }
    return {
      show: false,
      Avatar: Avatar,
      form: {},
      rules: {
        nickName: [
          { required: true, message: '请输入用户昵称', trigger: 'blur' },
          { min: 2, max: 20, message: '长度在 2 到 20 个字符', trigger: 'blur' }
        ],
        phone: [{ required: true, trigger: 'blur', validator: validPhone }]
      }
    }
  },
  computed: {
    ...mapGetters(['avatar'])
  }
}
</script>

<style rel="stylesheet/scss" lang="scss">
.avatar {
  width: 120px;
  height: 120px;
  border-radius: 50%;
}
.user-info {
  padding-left: 0;
  list-style: none;
  li {
    border-bottom: 1px solid #f0f3f4;
    padding: 11px 0;
    font-size: 13px;
  }
  .user-right {
    float: right;
    a {
      color: #317ef3;
    }
  }
}
</style>
