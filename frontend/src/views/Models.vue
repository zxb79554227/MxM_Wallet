<template>
    <div class=" px-6">
         <app-amount></app-amount>
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
      'app-amount': ()=>import('@/components/amount.vue')
    }
});
</script>
