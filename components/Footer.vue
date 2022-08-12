<template lang="pug">
  footer.footer
    .site-container.footer__container
      p.footer__legend АО РИВЦ
      p.footer__legend._underline Все права защищены
      nuxt-link(to="/policy" class="footer__legend _underline") Политика конфиденциальности
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
@import '~@/assets/styles/global/helpers/media';

  .footer {
    padding: 7.2rem 0;
    border-top: 1px solid var(--color-dark-blue2);

    @include mq(sm) {
      border: none;
      padding-top: 0;
      padding-bottom: 8.3rem;
    }

    &__container {
      display: flex;
      align-items: center;
      gap: 5.5rem;

      @include mq(sm) {
        flex-direction: column;
        justify-content: center;
        gap: 0;
      }
    }

    &__legend {
      color: var(--color-white);

      &._underline {
        text-decoration: underline;
      }

      &:hover {
        text-decoration: none;
      }

      @include mq(md) {
        &:nth-child(1) {
          display: none;
        }
      }

      @include mq(sm) {
        font: var(--font-xs-mobile);
        margin-bottom: 0.8rem;
        display: inline-block;
        color: #515F84;

        &:last-child {
          margin-bottom: 0;
        }
      }
    }

    &__btn {
      margin-left: auto;

      @include mq(md) {
        display: none;
      }
    }
  }
</style>
