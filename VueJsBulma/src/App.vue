<template>
  <div id="app">
    <headers/>
    <router-view></router-view>
   
  </div>
</template>

<script>
 
import headers from "@/components/header.vue";
export default {
name :"App",
components : {
  headers
}
};
</script>

<style>
</style>
