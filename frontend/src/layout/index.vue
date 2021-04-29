<template>
  <v-ons-page>
  <div class='h-full w-full text-gray-50 bg-themeBlue'>
      <div class="header flex justify-between px-4 py-4">
        <div class='text-left'></div>
        <div class='text-center'></div>
        <div class='text-right'>
          <app-icon customized name='iconguanyu' class=" inline  text-xl"></app-icon>
          <app-icon name='camera' @iconClick='clicked'  class=" inline ml-4 text-xl"></app-icon>
        </div>
      </div>
      <div class='main'>
         <router-view />
      </div>
    </div>  
    </v-ons-page>
  </div>

</template>
<script lang='ts'>
import Vue from "vue";

export default Vue.extend({
    data(){
        return{

        }
    },
    components:{
      'app-icon': ()=>import('@/components/appIcon.vue')
    },
    methods:{
      clicked(target:any){
          console.log(target);
          this.$router.push('/models')
      }
    }
});
</script>
