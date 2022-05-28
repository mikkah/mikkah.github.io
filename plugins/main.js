import Vue from 'vue'
import { ObserveVisibility } from 'vue-observe-visibility'

import VueParticles from 'vue-particles'
import '@fortawesome/fontawesome-free/css/all.min.css'

import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

Vue.use(VueParticles)

Vue.directive('observe-visibility', ObserveVisibility)


const mixin = {
  methods: {
    visibilityChanged(isVisible, _entry, navigation) {
      if(isVisible) {
        this.$emit('emitVisibility', navigation)
      }
    },
    scrollTo(div) {
      document.querySelector('.'+div).scrollIntoView({
        behavior: 'smooth'
      });
    }
  }
}

Vue.mixin(mixin)
