<template>
  <v-app>
     <div id="app">
    <component :is="layout">
      <router-view/>
    </component>
  </div>
  </v-app>
</template>

<script>
const default_layout = "app";

export default {
  name: 'App',  
  computed: {
    layout() {
      return (this.$route.meta.layout || default_layout) + "-layout";
    }
  },
};
</script>
