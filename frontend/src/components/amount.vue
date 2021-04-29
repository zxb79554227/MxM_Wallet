<template>
    <div>
        <div class='flex align-middle items-center'>
            <div class='self-center text-base mr-2'><app-icon customized name='iconamount' ></app-icon> </div>
            <div class="self-center text-base">钱包总资产</div>
        </div>
        <div class=' text-2xl'>
            $ <span>10000000</span>
        </div>
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
    }
});
</script>
