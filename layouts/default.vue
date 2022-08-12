<template lang="pug">
  .page-wrapper
    Header
    main.page-main.main
      nuxt
    Footer
    Modal(:open="$store.state.modal")
    ModalVid(:open="$store.state.modalVid")
</template>
<script>
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Modal from '@/components/Modal'
import ModalVid from '@/components/ModalVid'

export default {
  components: {
    Header,
    Footer,
    Modal,
    ModalVid
  }
}
</script>
<style lang="scss">

</style>
