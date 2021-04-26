<template>
  <div id="App" class=" ">
    <v-ons-page>


    <v-ons-list class=' bg-red-400  '>
      <v-ons-list-header>Default</v-ons-list-header>
      <v-ons-list-item>Item A</v-ons-list-item>
      <v-ons-list-item>Item B</v-ons-list-item>
    </v-ons-list>
    <br />

    <v-ons-list>
      <v-ons-list-header>Expandable</v-ons-list-header>
      <v-ons-list-item expandable :expanded.sync="isExpanded">
        Tap to expand
        <div class="expandable-content">Expandable content</div>
      </v-ons-list-item>
    </v-ons-list>
    <br />

    <v-ons-list>
      <v-ons-list-header>Tappable / Ripple</v-ons-list-header>
      <v-ons-list-item tappable>Tap me</v-ons-list-item>

      <v-ons-list-header>Chevron</v-ons-list-header>
      <v-ons-list-item modifier="chevron" tappable>Chevron</v-ons-list-item>

      <v-ons-list-header>Thumbnails and titles</v-ons-list-header>
      <v-ons-list-item>
        <div class="left">
          <img class="list-item__thumbnail" src="http://placekitten.com/g/40/40">
        </div>
        <div class="center">
          <span class="list-item__title">Cutest kitty</span><span class="list-item__subtitle">On the Internet</span>
        </div>
      </v-ons-list-item>

      <v-ons-list-header>Icons</v-ons-list-header>
      <v-ons-list-item>
        <div class="left">
          <v-ons-icon icon="md-face" class="list-item__icon"></v-ons-icon>
        </div>
        <div class="center">
          Icon
        </div>
      </v-ons-list-item>

      <v-ons-list-header>Switch</v-ons-list-header>
      <v-ons-list-item>
        <div class="center">
          Turn it on
        </div>
        <div class="right">
          <v-ons-switch></v-ons-switch>
        </div>
      </v-ons-list-item>

      <v-ons-list-header>Switch and icon</v-ons-list-header>
      <v-ons-list-item>
        <div class="left">
          <v-ons-icon icon="md-face" class="list-item__icon"></v-ons-icon>
        </div>
        <div class="center">
          Icon and switch
        </div>
        <div class="right">
          <v-ons-switch></v-ons-switch>
        </div>
      </v-ons-list-item>

      <v-ons-list-header>No divider</v-ons-list-header>
      <v-ons-list-item modifier="nodivider">Item A</v-ons-list-item>
      <v-ons-list-item modifier="nodivider">Item B</v-ons-list-item>

      <v-ons-list-header>Long divider</v-ons-list-header>
      <v-ons-list-item modifier="longdivider">Item A</v-ons-list-item>
      <v-ons-list-item modifier="longdivider">Item B</v-ons-list-item>
    </v-ons-list>

    <br />

    <v-ons-list modifier="inset">
      <v-ons-list-header>Inset list</v-ons-list-header>
      <v-ons-list-item modifier="longdivider">Item A</v-ons-list-item>
      <v-ons-list-item modifier="longdivider">Item B</v-ons-list-item>
    </v-ons-list>

    <br />
     </v-ons-page>
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
  mounted(){
    console.log(navigator);

  }
});
</script>
