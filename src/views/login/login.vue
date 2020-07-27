<template>
  <div class="body">
    <span>{{msg}}</span>
  </div>
</template>

<script>
  export default {
    name: "login",
    data() {
      return {
        msg: '这是登录页面'
      }
    }
  }
</script>

<style scoped>

  .body {
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
    background-color: aqua;
  }

  .main-bg {
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
    background-color: aqua;
  }
</style>
