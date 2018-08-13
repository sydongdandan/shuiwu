<template>
  <div id='device-nav'>
    <ul class="dev-ul">
      <li>
        <router-link to="/">
          <p>
            全部设备
          </p>
          <span>219</span>
        </router-link>
      </li>
      <li>
        <router-link to="/">
          <p>
            维修人员
          </p>
          <span>99</span>
        </router-link>
      </li>
      <li>
        <router-link to="/">
          <p>
            上岗人数
          </p>
          <span>99</span>
        </router-link>
      </li>
    </ul>
    <ul class="device-ico">
      <li>
        <router-link to="/watersupply/wlist" class="ico1">
          <span><img :src="ico1" /></span><p>二次供水</p>
        </router-link>
      </li>
      <li>
        <router-link to="/watersupply/wlist" class="ico2">
           <span><img :src="ico2" /></span><p>污水处理</p>
        </router-link>
      </li>
      <li>
        <router-link to="" class="ico3">
          <span><img :src="ico3" /></span><p>售后维修</p>
        </router-link>
      </li>
      <li>
        <router-link to="" class="ico4">
          <span><img :src="ico4" /></span><p>维修工单</p>
        </router-link>
      </li>
      <li>
        <router-link to="" class="ico5">
          <span><img :src="ico5" /></span><p>今日任务</p>
        </router-link>
      </li>
      <li>
        <router-link to="" class="ico6">
          <span><img :src="ico6" /></span><p>故障设备</p>
        </router-link>
      </li>
      <li>
        <router-link to="" class="ico7">
          <span><img :src="ico7" /></span><p>视频培顺</p>
        </router-link>
      </li>
      <li>
        <router-link to="" class="ico8">
          <span><img :src="ico8" /></span><p>资料下载</p>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name:'device',
  data(){
    return{
      // footpic:[
      //   // 底部图片引入
      //   {url:require("@/assets/img/ico/home.png")},
      //   {url:require("@/assets/img/ico/renwu.png")},
      //   {url:require("@/assets/img/ico/my.png")}
      // ]
      ico1:require("@/assets/img/ico/icoa.png"),
      ico2:require("@/assets/img/ico/icob.png"),
      ico3:require("@/assets/img/ico/icoc.png"),
      ico4:require("@/assets/img/ico/icod.png"),
      ico5:require("@/assets/img/ico/icoe.png"),
      ico6:require("@/assets/img/ico/icof.png"),
      ico7:require("@/assets/img/ico/icog.png"),
      ico8:require("@/assets/img/ico/icoh.png")

    }
  }
}
</script>
