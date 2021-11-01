<template>
  <div class="wrapper font-body  text-white">

    <div id="main-content" class="content">
      <Main />
      <div class="details px-20">
      <!-- <About class="mb-14" @emitVisibility="(e) => { activeSection = e }"/> -->
      <Skills class="mb-14"/>
      <Experience class="mb-14"/>
      <Projects/>

      </div>
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
  overflow: hidden;
  background: #04040f;

  .content {
    background: linear-gradient(45deg,#000,#141347,#000);
    overflow: auto;
    height: calc(100vh);
  }
}

@media only screen and (max-width: 767px) {
  .details {
    padding-left: 40px;
    padding-right: 40px;
  }
}
</style>
