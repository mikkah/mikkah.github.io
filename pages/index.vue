<template>
  <div class="wrapper font-body grid grid-cols-3 text-white">
    <div class="pr-4 intro">
      <Main/>
    </div>
    <div class="md:col-span-2 pt-6 pb-6 pr-6 pl-6 md:pr-16 md:pl-16 content col-span-3 ">
      <Skills class="mb-14"/>
      <Experience class="mb-14"/>
      <Projects />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({})
</script>

<style lang="scss" scoped>
.wrapper {
  height: 100vh;
  background: #04040f;
  .content {
    background: linear-gradient(45deg,#000,#141347,#000);
    overflow: auto;
    height: calc(100vh);
  }
}
</style>