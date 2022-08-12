<template lang="pug">
  .modal( v-if="open" :class="open ? 'is-active' : ''" @click.stop="closeModal")
    .modal__content(@click.stop v-scroll-lock="open")
      button.modal__close(aria-label="Закрыть модальное окно" @click="closeModal")
      video.modal__vid(
        playsinline muted autoplay loop
        src="@/assets/includes/vid2.mp4"
      )
</template>
<script>
import Button from '@/components/UI/Button'

export default {
  nmae: 'Modal',
  components: {
    Button
  },
  props: {
    open: {
      type: Boolean
    }
  },
  methods: {
    closeModal () {
      this.$store.commit('SET_MODAL_VID', false)
    }
  }
}
</script>
<style lang="scss" scoped>
  @import '~@/assets/styles/global/helpers/mixins';
  @import '~@/assets/styles/global/helpers/media';

  .modal {
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
      z-index: 2;
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
        background-color: var(--color-blue);
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
      max-width: 131.2rem;
      width: 100%;
      background-color: var(--color-white);
      border-radius: 1.2rem;
      padding: 7.1rem;
      display: flex;
      flex-direction: column;
      color: var(--color-dark);

      @include mq(lg) {
        max-width: 95%;
      }

      @include mq(md) {
        height: 90%;
        overflow: auto;
        padding: 3.2rem;
      }
    }

    &__vid {
      width: 100%;
      height: 50rem;

      @include mq(md) {
        height: 100%;
      }
    }
  }
</style>
