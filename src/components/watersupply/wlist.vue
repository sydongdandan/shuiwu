<template>
  <ul class="wlistul">
    <li class="wlist" v-for="wlist in wlista">
      <router-link to="/watersupply/wdetail">
        <h3 class="wlisth3">{{wlist.name}}<i class="wlistcare" v-if="wlist.care">有任务</i>
          <i class="wlistsucc" v-if="!wlist.care">已解决</i>
        </h3>
        <p class="wlistp">
          报警时间：{{wlist.time}}<br/>
          地点：{{wlist.adress}}
        </p>
        <span class="wlistspan">历史报警</span>
      </router-link>
    </li>
  </ul>
</template>
<script>
export default {
  name:'wlist',
  data(){
    return{

      wlista:[{
          name:'金色里程小区泵房',
          time:'2016/06/12  08：32',
          adress:'安徽合肥市长丰县双 凤经济开发区金色里程小区',
          care:true
        },
        {
          name:'舜禹水务泵房',
          time:'2016/06/12 08：32 - 2016/06/12 10:00',
          adress:'安徽合肥市长丰县双 凤经济开发区金色里程小区',
          repairperson:'小风',
          department:'二次供水',
          care:false
        },
        {
          name:'舜禹水务泵房',
          time:'2016/06/12 08：32 - 2016/06/12 10:00',
          adress:'安徽合肥市长丰县双 凤经济开发区金色里程小区',
          repairperson:'小风',
          department:'二次供水',
          care:false
        },
        {
          name:'舜禹水务泵房',
          time:'2016/06/12 08：32 - 2016/06/12 10:00',
          adress:'安徽合肥市长丰县双 凤经济开发区金色里程小区',
          repairperson:'小风',
          department:'二次供水',
          care:false
        },
        {
          name:'舜禹水务泵房',
          time:'2016/06/12 08：32 - 2016/06/12 10:00',
          adress:'安徽合肥市长丰县双 凤经济开发区金色里程小区',
          repairperson:'小风',
          department:'二次供水',
          care:false
        }],
    }
  }
}
</script>
