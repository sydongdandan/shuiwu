<template>
  <div id="app">
    <v-header></v-header>
    <!-- <Amap></Amap> -->
    <router-view/>

    <v-footer></v-footer>
  </div>
</template>

<script>
// import Amap from './components/Amap.vue';   //在页面中引入高德地图
import header from './components/header/header.vue';
import footer from './components/footer/footer.vue'
export default {
name: 'App',
  components:{
    // 'Amap':Amap,
    'v-header':header,
    'v-footer':footer
  }
}

</script>

<style>
.logo{width:100px;}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 46px;
}
</style>
