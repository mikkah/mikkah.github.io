<template>
  <div class="wrapper font-body grid grid-cols-3 text-white">
    <div class="intro">
      <Main :active-section="activeSection"/>
    </div>
    <div id="main-content" class="md:col-span-2 pt-6 pb-6 pr-6 pl-6 md:pr-16 md:pl-16 content col-span-3 ">
      <About class="mb-14" @emitVisibility="(e) => { activeSection = e }"/>
      <Skills class="mb-14" @emitVisibility="(e) => { activeSection = e }"/>
      <Experience class="mb-14" @emitVisibility="(e) => { activeSection = e }"/>
      <Projects @emitVisibility="(e) => { activeSection = e }"/>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data() {
    return {
      activeSection: 'Skills',
    }
  },
})
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