<template>
  <div class="success-page">
    密码重置成功，即将跳转到登录页面...
  </div>
</template>
<script>
export default {
  data() {
    return {
      setTime: ''
    }
  },
  created() {
    this.toLogin()
  },
  beforeDestroy() {
    clearTimeout(this.setTime)
  },
  methods: {
    toLogin() {
      this.setTime = setTimeout(() => {
        this.$router.push('/login')
        window.location.reload()
      }, 3000)
    }
  }
}
</script>
<style lang="scss" scoped>
.success-page {
  margin-top: 10%;
  font-size: 36px;
  text-align: center;
}
</style>
