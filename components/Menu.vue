<template lang="pug">
.menu(
  :class="openMenu ? 'is-active' : ''"
)
  .site-container.menu__container
    .menu__heading-container
      a.menu__logo(href="/")
        img(src="@/assets/img/logo.svg", alt="alt")
      button.menu__btn(@click="closeMenu")
        span
        span
</template>

<script>
export default {
  props: {
    openMenu: {
      type: Boolean
    }
  },
  data () {
    return {
      closeMen: false
    }
  },
  methods: {
    closeMenu () {
      this.$emit('close', this.closeMen)
    }
  }
}
</script>

<style lang="scss">
.menu {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 28;
  width: 100%;
  height: 100%;
  background-color: var(--color-bg);
  padding-top: 1.5rem;

  opacity: 0;
  visibility: hidden;
  transition: opacity var(--transition), visibility var(--transition);

  &.is-active {
    opacity: 1;
    visibility: visible;
  }

  &__logo {
    display: block;
    max-width: 13rem;
  }

  &__heading-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  &__btn {
    position: relative;
    width: 4rem;
    height: 4rem;

    span {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 100%;
      height: 0.2rem;
      background-color: var(--color-white);

      &:nth-child(1) {
        transform: translate(-50%, -50%) rotate(45deg);
      }

      &:nth-child(2) {
        transform: translate(-50%, -50%) rotate(-45deg);
      }
    }
  }
}
</style>
