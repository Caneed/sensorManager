<script setup>
import {reactive} from "vue";


let style=reactive({
  height: '100%',
  width: '100%',
  overflow: 'hidden',
})
</script>

<template>
  <router-view :style="style"></router-view>
</template>
<style>
</style>
