<template lang="pug">
section.include-page
  .site-container.include-page__container
    .include-page__heading-wrapper
      h1.include-page__heading
        | {{ title }}
      nuxt-link.include-page__back(:to="{ path: '/', hash: '#projects' }")
    p.include-page__text(v-if="text")
      | {{ text }}
    .include-page__info
      slot

      img.include-page__image(:src="getDynamicFile(img)", :alt="title")

      a.button.include-page__btn(
        :href="link",
        target="_blank",
        :class="btnClass"
      )
        | Перейти на сайт
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: 'title'
    },
    text: {
      type: String,
      default: ''
    },
    img: {
      type: String,
      default: 'img/agro/laptop.png'
    },
    link: {
      type: String,
      default: ''
    },
    btnClass: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss">
@import "~@/assets/styles/global/helpers/media";

.include-page {
  position: relative;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @include mq(lg) {
    height: auto;
    padding-top: 7.5rem;
    padding-bottom: 7.5rem;
  }

  @include mq(sm) {
    margin-bottom: 4rem;
    padding-top: 7.8rem;
    padding-bottom: 7.8rem;
  }

  &__container {
    color: var(--color-white);
  }

  &__info {
    margin-top: 8rem;

    @include mq(md) {
      margin-top: 4rem;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
    }

    @include mq(sm) {
      margin-top: 3.6rem;
    }
  }

  &__heading {
    font: var(--font-l);
    max-width: 63.2rem;

    @include mq(sm) {
      font: var(--font-m-mobile);
    }
  }

  &__text {
    margin-top: 0.6rem;
    font-weight: 700;

    @include mq(sm) {
      font: var(--font-xs);
      font-weight: 700;
    }
  }

  &__image {
    position: absolute;
    bottom: 4%;
    right: 0;
    width: 64rem;
    height: 54.5rem;
    object-fit: cover;

    @include mq(lg) {
      width: 44rem;
      height: 48.5rem;
      bottom: 0;
    }

    @include mq(md) {
      position: static;
      display: block;
      align-self: flex-end;
      margin-right: calc(var(--content-padding) * -1);
      object-fit: contain;
      height: auto;
      margin-top: 4rem;
    }
  }

  &__btn {
    display: inline-block;
    margin-top: 4.7rem;
    transition: color var(--transition);

    &:hover {
      color: var(--color-blue);
    }

    @include mq(md) {
      margin-top: 0;
    }
  }

  &__heading-wrapper {
    display: flex;
    justify-content: space-between;
  }

  &__back {
    position: relative;
    width: 2.2rem;
    height: 2.2rem;

    &::before,
    &::after {
      position: absolute;
      top: 50%;
      left: 50%;
      width: 100%;
      height: 0.2rem;
      background-color: var(--color-white);
      transform: translate(-50%, -50%);
      content: "";
    }

    &::after {
      transform: translate(-50%, -50%) rotate(45deg);
    }

    &::before {
      transform: translate(-50%, -50%) rotate(-45deg);
    }

    @include mq(sm) {
      position: absolute;
      top: 2rem;
      right: 2rem;
    }
  }
}
</style>
