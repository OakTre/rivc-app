<template lang="pug">
  footer.footer
    .site-container.footer__container
      p.footer__legend АО РИВЦ
      p.footer__legend._underline Все права защищены
      a(href="/" class="footer__legend _underline") Политика конфиденциальности
      Button.footer__btn
        | Связаться с нами
</template>

<script>
import Button from '@/components/UI/Button'
export default {
  components: {
    Button
  }
}
</script>

<style lang="scss">
  .footer {
    padding: 7.2rem 0;
    border-top: 1px solid var(--color-dark-blue2);

    &__container {
      display: flex;
      align-items: center;
      gap: 5.5rem;
    }

    &__legend {
      color: var(--color-white);

      &._underline {
        text-decoration: underline;
      }

      &:hover {
        text-decoration: none;
      }
    }

    &__btn {
      margin-left: auto;
    }
  }
</style>
