<template>
  <div id="wdetail">
    <div class="wtext">
      <h3 class="wtexth3">{{name}}<span>历史维修</span></h3>
      <p class="wtextp">
        故障：{{fault}}<br/>
        地点：{{adress}}
      </p>
    </div>
    <div class="w-in">
      <form>
        <input type="text" placeholder="请输入姓名" class="w-inname" />
        <textarea class="w-intextarea">备注:</textarea>
        <h3 class="w-inh3">现场图片</h3>
        <div class="addpic">
          <span><img :src="pic1" /></span>
          <span><img :src="addpic" /></span>
      </div>
      </form>
      <div class="w-btn">
        <input type="button" value="已解决" class="w-btnsucc" />
        <input type="button" value="申请技术支持" class="w-btnfail" />
      </div>
    </div>

  </div>
</template>
<script>
export default {
  name:'wlist',
  data(){
    return{
          name:'金色里程小区泵房',
          adress:'安徽合肥市长丰县双 凤经济开发区金色里程小区',
          care:true,
          fault:'1号泵空开跳闸',
          pic1:require("@/assets/img/ico/pic1.jpg"),
          addpic:require("@/assets/img/ico/add.jpg"),
        }
      }
    }
</script>
