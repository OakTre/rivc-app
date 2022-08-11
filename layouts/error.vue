<template lang="pug">
  section.section-error
    .site-container.section-error__container.grid-container
      .section-error__block
      .section-error__block
        img(src="@/assets/img/logo.svg" alt="Company Logo" class="section-error__logo")
        h1.section-error__heading СТРАНИЦА НЕ НАЙДЕНА
        p.section-error__text
          | Страница, которую вы ищете, не существует или была удалена
        nuxt-link.section-error__link(
            class="button button--secondary"
            to="/"
          ) Перейти на главную
    img(src="@/assets/img/404.png" alt="404 image" class="section-error__error-img")
    img(src="@/assets/img/error-bg.svg" alt="404 image" class="section-error__error-bg-img")
</template>
<script>
export default {
  layout: 'empty'
}
</script>
<style lang="scss" scoped>
  @import "@/assets/styles/global/helpers/media";

  .section-error {
    position: relative;
    padding-top: 0;
    height: calc(100vh - var(--header-height));

    &__block {
      &:nth-child(1) {
        grid-column: 2 span;
      }

      &:nth-child(2) {
        grid-column: 10 span;
      }
    }

    &__logo {
      width: 23.8rem;
      height: auto;

      @include mq(sm) {
        width: 10.9rem;
      }
    }

    &__heading {
      margin-top: 12.2rem;
      font: var(--font-xl);
      text-transform: uppercase;
      color: var(--color-blue);
      margin-bottom: 1.7rem;

      @include mq(md) {
        margin-top: 7rem;
      }

      @include mq(sm) {
        font: var(--font-m-mobile);
        margin-bottom: 1.3rem;
      }
    }

    &__text {
      font: var(--font-l);
      margin-bottom: 6.7rem;

      @include mq(sm) {
        font: var(--font-xs);
        margin-bottom: 3.6rem;
      }
    }

    &__link {
      @include mq(sm) {
        width: 100%;
        display: block;
      }
    }

    &__error-img {
      position: absolute;
      bottom: 0;
      left: 0;
      height: 35rem;

      @include mq(md) {
        height: 22rem;
      }

      @include mq(sm) {
        height: auto;
        width: 100%;
        object-fit: contain;
      }
    }

    &__error-bg-img {
      position: absolute;
      bottom: 0;
      left: -10rem;
      z-index: -1;
      -webkit-backface-visibility: hidden;
      -webkit-perspective: 1000;
      -webkit-transform: translate3d(0, 0, 0);
      -webkit-transform: translateZ(0);
      backface-visibility: hidden;
      perspective: 1000;
      transform: translate3d(0, 0, 0);
      transform: translateZ(0);
      filter: blur(210px);

      @include mq(sm) {
        width: 100%;
        height: auto;
        left: 0;
        filter: blur(90px);
      }
    }

    &__container {
      @include mq(md) {
        display: block;
      }
    }
  }
</style>
