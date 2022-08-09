<template lang="pug">
  section.section.increase
    .site-container.increase__container.site-top-line
      h2.increase__heading
        | #[span Повышайте]
        | производительность и рентабельность предприятия с нами!
      img(src='@/assets/img/increase/img.svg' alt='Повышайте производительность и рентабельность предприятия с нами!' class="increase__img")
      Button.increase__btn.button--secondary
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

  .increase {
    position: relative;

    &__heading {
      font: 700 4rem/1 var(--main-ff);
      color: var(--color-white);
      max-width: 48rem;
      margin-bottom: 3rem;

      span {
        display: block;
        font: var(--font-xl);
        color: var(--color-blue);
      }
    }

    &__img {
      position: absolute;
      top: 5rem;
      right: var(--content-padding);
      width: 56rem;
      height: 27.2rem;
      object-fit: contain;

      @include mq(md) {
        width: 34rem;
      }
    }
  }
</style>
