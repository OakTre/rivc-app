<template lang="pug">
ul.header__locale-switcher
  li.header__locale-switcher-item(
    v-for="locale in availableLocales",
    :key="locale"
  )
    //- .div(@click="setLocale(); $router.push(switchLocalePath(locale))")
    //-   | {{ locale }}
    nuxt-link(:to.prevent="switchLocalePath(locale)")
      | {{ locale }}
</template>
<script>
export default {
  computed: {
    availableLocales () {
      return this.$i18n.locales.filter(i => i.code !== this.$i18n.locale)
    }
  },
  methods: {
    setLocale () {
      this.$store.commit('SET_LOCALE', this.$i18n.locale)
      this.$nuxt.refresh()
    }
  }
}
</script>
<style lang="scss">

</style>
