<template lang="pug">
header.header
  .site-container.header__container
    a.header__logo(href="/")
      img(src="@/assets/img/logo.svg", alt="alt")
    Nav.header__nav(:navItems="navItems")
    button.button.header__btn(@click="openModal")
      span.button__text
        | Связаться с нами
    button.header__burger-btn(aria-label="Открыть меню" v-on:click="handleMenu")
      span
      span
      span
  Menu(:openMenu="openMenu" @close="closeMenu")
</template>

<script>

import Nav from '@/components/UI/Nav'
import Button from '@/components/UI/Button'
import Menu from '@/components/Menu'

export default {
  components: {
    Nav,
    Button,
    Menu
  },
  data () {
    return {
      navItems: [
        { link: '/', name: 'О компании' },
        { link: '/', name: 'Проекты' },
        { link: '/', name: 'Контакты' }
      ],
      openMenu: false
    }
  },
  methods: {
    handleMenu () {
      this.openMenu = true
    },
    closeMenu (openMenu) {
      this.openMenu = openMenu
    },
    openModal (e) {
      this.$store.commit('SET_MODAL', true)
    }
  }
}
</script>

<style lang="scss">
@import '~@/assets/styles/global/helpers/media';

.header {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 25;
  width: 100%;
  height: var(--header-height);
  display: flex;
  align-items: center;
  background-color: var(--color-dark);

  &__container {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  &__nav {
    margin-left: auto;

    @include mq(md) {
      display: none;
    }
  }

  &__btn {
    margin-left: 7rem;

    @include mq(md) {
      display: none;
    }
  }

  &__burger-btn {
    margin-left: auto;
    width: 4rem;
    height: 4rem;
    display: none;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    span {
      display: block;
      width: 100%;
      height: 0.2rem;
      background-color: var(--color-white);
      flex-shrink: 0;

      margin-bottom: 0.4rem;

      &:last-child {
        margin-bottom: 0;
      }
    }

    @include mq(md) {
      display: flex;
    }
  }

  &__logo {
    max-width: 13rem;
  }
}
</style>
