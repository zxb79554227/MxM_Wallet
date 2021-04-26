<template>
  <div class="MainPage  md:min-w-body" >
    <main-header></main-header>
    <div class="bg-gray-50">

      <router-view />
    </div>
    <main-footer></main-footer>
  </div>
</template>

<script lang='ts'>
import Vue from "vue";

export default Vue.extend({
  data(){
    return{
      offSetTop:0
    }
  },
  components: {

  },


});
</script>
