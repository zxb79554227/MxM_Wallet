<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>
<script lang='ts'>
import Vue from "vue";

export default Vue.extend({
    data(){
     return {
       isExpanded: false,
       darkTheme:``
    };
    },
 methods: {

  },

});
</script>
