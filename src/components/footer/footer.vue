<template>
  <div class="footer bg">
    <!-- <router-link v-for="item in footpic" to='/devices'>
      <img :src="item.url" />
   </router-link> -->
   <router-link to='/'>
     <img :src="url1" />
   </router-link>
   <router-link to='/device'>
     <img :src="url2" />
   </router-link>
   <router-link to='/mystuff'>
     <img :src="url3" />
   </router-link>
  </div>
</template>
<script>

  export default {
    name:'footer',
    data(){
      return{
        // footpic:[
        //   // 底部图片引入
        //   {url:require("@/assets/img/ico/home.png")},
        //   {url:require("@/assets/img/ico/renwu.png")},
        //   {url:require("@/assets/img/ico/my.png")}
        // ]
        url1:require("@/assets/img/ico/home.png"),
        url2:require("@/assets/img/ico/renwu.png"),
        url3:require("@/assets/img/ico/my.png")
      }
    }
  }
</script>
