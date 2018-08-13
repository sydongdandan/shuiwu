<template>
  <div>
    <div id="container" class="mymap"></div>
  </div>

</template>

<script src="../assets/js/adress.js"></script>
<script src="https://webapi.amap.com/maps?v=1.4.2"></script>
<script src="../assets/js/map.js"></script>
<script>

import AMap from 'AMap';   //在页面中引入高德地图
// import devices from '../assets/js/adress.js';

export default {
  // el: '#examplea',
  data(){
    return{
        // 地图小图标引入
        mark1:require("@/assets/img/ico/mark_bs.png"),
        mark2:require("@/assets/img/ico/mark_bs1.png"),
        mark3:require("@/assets/img/ico/mark_bs2.png"),
        device1:require("@/assets/img/ico/device1.png"),
        devseen:false
    }},

    name:'AMap',
      mounted(){
         this.loadmap();     //加载地图和相关组件
      },
      methods: {
        loadmap(){
        var map = new AMap.Map("container", {
            resizeEnable: true,
            center: [116.481181, 39.989792],
            zoom: 16
        });
        addMarker();
        //添加marker标记
        function addMarker() {
            map.clearMap();
            var marker = new AMap.Marker({
                map: map,
                position: [116.481181, 39.989792]
            });
            //鼠标点击marker弹出自定义的信息窗体
            AMap.event.addListener(marker, 'click', function() {
                window.location.href="#/device/deviceli";
            });
        }
      }
    }
}
</script>
