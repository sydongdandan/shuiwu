import Vue from 'vue'
import Router from 'vue-router'
import AMap from '@/components/Amap.vue'
import device from '@/components/device/device.vue'
// import device from '@/components/de/vice/device.vue'
import mystuff from '@/components/mystuff/mystuff.vue'
import devDetail from '@/components/device/devDetail.vue'
import deviceli from '@/components/device/deviceli.vue'
//二次供水
import wlist from '@/components/watersupply/wlist.vue'
import wdetail from '@/components/watersupply/wdetail.vue'

Vue.use(Router)

// export default new Router({
//   routes: [
//     {
//       path: '/',
//       name: 'HelloWorld',
//       component: HelloWorld
//     }
//   ]
// })
export default new Router({
  routes: [
    {
  		path:'/',
  		component:AMap
  	},
  	{
  		path:'/device',
  		component:device
  	},
  	{
  		path:'/mystuff',
  		component:mystuff
  	},
  	{
  		path:'/devDetails',
  		component:devDetail
  	},
  	{
  		path:'/device/deviceli',
  		component:deviceli
  	},
  	{
  		path:'/watersupply/wlist',
  		component:wlist
  	},
  	{
  		path:'/watersupply/wdetail',
  		component:wdetail
  	}
  ],
  linkActiveClass:'active'
})
