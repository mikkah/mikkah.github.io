import Vue from 'vue'
import { ObserveVisibility } from 'vue-observe-visibility'

Vue.directive('observe-visibility', ObserveVisibility)

const mixin = {
  methods: {
    visibilityChanged(isVisible, _entry, navigation) {
      if(isVisible) {
        this.$emit('emitVisibility', navigation)
      }
    }
  }
}

Vue.mixin(mixin)