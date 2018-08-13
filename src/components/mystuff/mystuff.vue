<template>
  <div id="my">
    <div class="mylist">
      <router-link to="/my"><div>我的资料</div></router-link>
      <router-link to="/signIn"><div>签到</div></router-link>
      <router-link to="/workList"><div>维修工单</div></router-link>
      <router-link to="/mytask"><div>我的任务</div></router-link>
    </div>
  </div>
</template>
<script>
export default {
  name: 'mystuff',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>
