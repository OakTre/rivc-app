<template lang="pug">
header.header
  .site-container.header__container
    a.header__logo(href="/")
      img(src="@/assets/img/logo.svg", alt="alt")
    Nav.header__nav(:navItems="navItems")
    Button.header__btn
      | Связаться с нами
</template>

<script>
import Nav from '@/components/UI/Nav'
import Button from '@/components/UI/Button'

export default {
  components: {
    Nav,
    Button
  },
  data () {
    return {
      navItems: [
        { link: '/', name: 'О компании' },
        { link: '/', name: 'Проекты' },
        { link: '/', name: 'Контакты' }
      ]
    }
  }
}
</script>

<style lang="scss">
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
  }

  &__btn {
    margin-left: 7rem;
  }
}
</style>
