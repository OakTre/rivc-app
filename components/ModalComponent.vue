<template lang="pug">
  .modalComponent(:class="open ? 'is-active' : ''" @click.stop="closeModal")
    .modalComponent__content(@click.stop v-scroll-lock="open")
      button.modalComponent__close(aria-label="Закрыть модальное окно" @click="closeModal")
      slot
</template>
<script>
export default {
  name: 'ModalComponent',
  props: {
    open: {
      type: Boolean
    }
  },
  methods: {
    closeModal () {
      this.$store.commit('SET_MODAL_COMPONENT', false)
      this.$store.commit('SET_MODAL_COMPONENT_APK', false)
      this.$store.commit('SET_MODAL_COMPONENT_AUTO', false)
      this.$store.commit('SET_MODAL_COMPONENT_KDW', false)
    }
  }
}
</script>
<style lang="scss">
  @import '~@/assets/styles/global/helpers/mixins';
  @import '~@/assets/styles/global/helpers/media';

  .modalComponent {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 40;
    width: 100%;
    height: 100%;
    background-color: rgba($color: #11132D, $alpha: 0.7);
    overflow: auto;
    opacity: 0;
    visibility: hidden;
    transition: opacity var(--taransition), visibility var(--tarnsition);

    &.is-active {
      opacity: 1;
      visibility: visible;
    }

    @include mq(md) {
      overflow: hidden;
    }

    &__close {
      position: absolute;
      top: 4rem;
      right: 4rem;
      z-index: 20;
      width: 2.2rem;
      height: 2.2rem;

      @include mq(sm) {
        top: 2.6rem;
        right: 2.6rem;
      }

      &:hover {
        &::before,
        &::after {
          background-color: var(--color-blue-btn);
        }
      }

      &::before,
      &::after {
        position: absolute;
        top: 50%;
        left: 50%;
        display: block;
        width: 100%;
        height: 0.2rem;
        background-color: var(--color-white);
        transform: translate(-50%, -50%);
        transition: background-color var(--tarnsition);
        content: "";
      }

      &::after {
        transform: translate(-50%, -50%) rotate(45deg);
      }

      &::before {
        transform: translate(-50%, -50%) rotate(-45deg);
      }
    }

    &__content {
      position: absolute;
      top: 50%;
      left: 50%;
      z-index: 10;
      transform: translate(-50%, -50%);
      max-width: 90%;
      width: 100%;
      height: 90%;
      background-color: transparent;
      border-radius: 1.2rem;
      display: flex;
      flex-direction: column;
      color: var(--color-dark);

      @include mq(lg) {
        max-width: 95%;
        display: block;
      }

      @include mq(md) {
        max-width: 100%;
        height: 100%;
        border-radius: 0;
        overflow: auto;
      }
    }
  }
</style>
