<template>
  <div class="intro text-right">
    <div class="intro-md hidden md:block pt-16 mt-6 mb-6 ">
      <div class="title">
        <h1 class="first-name font-bold tracking-widest">Mikhael</h1>
        <h1 class="last-name font-bold tracking-widest">Oriel</h1>
        <h3 class="tracking-widest mt-3">Software Engineer</h3>
      </div>
      <div class="navs mt-14">
        <ul class="hidden md:block">
          <li v-for="(nav, i) in navs" :key="i" class="cursor-default mt-3" >{{ nav }}</li>
        </ul>
      </div>
    </div>
    <div class="intro-sm md:hidden pl-4 text-left mt-3 mb-3 ">
      <p class="text-xl font-bold tracking-wider ">Mikhael Oriel</p>
      <p class="text-xs tracking-widest">Software Engineer</p>
    </div>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue'

  export default Vue.extend({
    data() {
      return {
        navs: [
          'Skills',
          'Experience',
          'Projects'
        ]
      }
    }
    
  })
</script>


<style lang="scss" scoped>
.intro {
  h1 {
    font-size: 65px;
    &.last-name {
      margin-top: -25px;
    }
  }
  h3 {
    font-size: 24px;
  }
}
</style>
