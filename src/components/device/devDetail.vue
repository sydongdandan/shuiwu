<template>
  <div id="devDetail">
    <ul v-for="todo in devDate">
      <li v-if="todo.pump1" class='devstatusli'>开 <p>一号泵</p> </li>
      <li v-if="!todo.pump1" class='devpumpf devstatusli'>关<p>一号泵</p></li>
      <li v-if="todo.pump2" class='devstatusli'>开<p>二号泵</p></li>
      <li v-if="!todo.pump2" class='devpumpf devstatusli'>关<p>二号泵</p></li>
      <li v-if="todo.pump3" class='devstatusli'>开<p>三号泵</p></li>
      <li v-if="!todo.pump3" class='devpumpf devstatusli'>关<p>三号泵</p></li>
      <li class="devstatusli">{{todo.Bpressure}}<p>泵前压力</p></li>
      <li class="devstatusli">{{todo.Apressure}}<p>泵后压力</p></li>
      <li class="devstatusli">{{todo.Watertank}}<p>水箱水位</p></li>
      <li class="devstatusli">{{todo.Motorcurrent}}<p>电机电流</p></li>
      <li class="devstatusli">{{todo.inverte}}<p>1#变频器</p></li>
      <li class="devstatusli">{{todo.delivery}}<p>瞬时流量1</p></li>
    </ul>
    <div class="dev-pic">
      <img :src="device2" />
    </div>
  </div>


</template>
<script>
export default {
  name:'devDetail',
  data(){
    return{
      devDate:[{
        pump1:true,
        pump2:false,
        pump3:false,
        Bpressure:'0.0Mpa',
        Apressure:'3.2Mpa',
        Watertank:'2.3m',
        Motorcurrent:'3A',
        inverte:'1Hz',
        delivery:'1M/s'
      }],
        device2:require("@/assets/img/ico/device2.jpg"),
      }
    },
}
</script>
