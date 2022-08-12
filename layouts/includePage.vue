<template lang="pug">
  .page-wrapper
    main.main
      nuxt
    Footer
    Modal(:open="$store.state.modal")
</template>
<script>
import Footer from '@/components/Footer'
import Modal from '@/components/Modal'

export default {
  name: 'IncludeLayout',
  components: {
    Footer,
    Modal
  }
}
</script>
<style lang="scss" scoped>
  .main {
    flex-grow: 1;
  }
</style>
