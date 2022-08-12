<template lang="pug">
  section.policy
    .site-container
      h1 Политика
      nuxt-link.button.policy__btn(
        to="/"
      )
        .button__txt
          | На главную
</template>

<script>

export default {
  name: 'Policy',
  layout: 'includePage'
}
</script>

<style lang="scss" scoped>
  .policy {
    padding-top: var(--header-height);

    &__btn {
      display: inline-block;
      margin-top: 4rem;
    }
  }
</style>
