<template lang="pug">
nav.nav
  ul.nav__list
    li.nav__item(v-for="item in navItems" :key="item.id")
      nuxt-link.nav__link(
        :to="{path: '/', hash: item.anchor}"
      ) {{ item.name }}
</template>
<script>
export default {
  props: {
    // eslint-disable-next-line vue/require-default-prop, vue/require-prop-types
    navItems: {}
  }
}
</script>
<style lang="scss" scoped>
  .nav {
    &__list {
      display: flex;
      align-items: center;
      gap: 5.5rem;
    }

    &__link {
      font: var(--font-s);
      color: var(--color-white);

      &:hover {
        text-decoration: underline;
      }
    }
  }
</style>
