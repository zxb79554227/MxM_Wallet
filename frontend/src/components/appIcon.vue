<template>
    <div @click="iconClicked">
         <icon-font v-if="customized" :type='name' />
         <a-icon v-else  :type="name" />
    </div>
</template>
<script lang='ts'>
import Vue from "vue";
import { Icon } from 'ant-design-vue';
const IconFont:any = Icon.createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_1628569_ojzsphhnsgm.js',
});

export default Vue.extend({
    props:{
        customized:{
            type:Boolean,
            default:false
        },
        name:{
            type:String,
            required:true
        }
    },
    components:{
        'a-icon':Icon,
        IconFont
    },
    methods:{
        iconClicked(e:Event){
            this.$emit('iconClick',{el:this.name})
        }
    }
});
</script>
