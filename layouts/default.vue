<template lang="pug">
  .page-wrapper
    Header
    main.page-main.main
      nuxt
    Footer
    Modal(:open="$store.state.modal")
</template>
<script>
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Modal from '@/components/Modal'

export default {
  components: {
    Header,
    Footer,
    Modal
  }
}
</script>
<style lang="scss">

</style>
