<template>
  <div class="about-container">
    <h1 v-observe-visibility="{
        callback: (isVisible, entry) => visibilityChanged(isVisible, entry, 'About'),
        throttle: 1,
        rootMargin: '-20px',
        intersection: {
          threshold: 1
        },
      }" class="text-2xl mb-5 tracking-wider">About</h1>
    <div class="about-content">
      <p class="text-center italic">"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."</p>
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