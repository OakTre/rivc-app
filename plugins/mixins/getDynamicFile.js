import Vue from 'vue'

export const methods = {
  getDynamicFile (name) {
    return require(`@/assets/${name}`)
  }
}

Vue.mixin({
  methods
})
