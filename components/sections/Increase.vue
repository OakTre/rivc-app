<!-- eslint-disable no-console -->
<!-- eslint-disable no-console -->
<template lang="pug">
  section.section.increase
    .site-container.increase__container.site-top-line
      .increase__heading--preload-wrapper(v-if="loader")
        .increase__heading--preload
        .increase__heading--preload.increase__heading--preload-width
        .increase__heading--preload.increase__heading--preload-width2
      .increase__heading(v-html="title")
      img(src='@/assets/img/increase/img.svg' alt='Повышайте производительность и рентабельность предприятия с нами!' class="increase__img")
      Button.increase__btn.button--secondary(
        @click.native="openModal"
      )
        | {{ btnTitle }}
</template>
<script>
import Button from '@/components/UI/Button'
export default {
  components: {
    Button
  },
  data () {
    return {
      title: '',
      btnTitle: 'Связаться с нами',
      loader: true,
      pageLocale: this.$i18n.locale
    }
  },
  created () {
    this.getTitle()
    this.setBtnTitle()
  },
  methods: {
    openModal () {
      this.$store.commit('SET_MODAL', true)
    },
    setBtnTitle () {
      // eslint-disable-next-line no-unused-expressions
      this.btnTitle = this.pageLocale === 'en' ? 'Contact us' : 'Связаться с нами'
    },
    async getTitle () {
      // eslint-disable-next-line quote-props
      await this.$strapi.find('increase', { locale: this.pageLocale })
        .then((result) => {
          this.title = result.data.attributes.Description
          this.loader = false
        })
        .catch((error) => {
          // eslint-disable-next-line no-console
          console.log(error)
        })
    }
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

      &--preload-wrapper {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 1rem;
      }

      &--preload {
        width: 26rem;
        height: 3rem;
        --grey-2: var(--color-dark-blue);
        --grey-1: var(--color-dark-blue2);
        animation-duration: 1.5s;
        animation-fill-mode: forwards;
        animation-iteration-count: infinite;
        animation-name: backgroundMovement;
        animation-timing-function: linear;
        background: var(--grey-2);
        background: linear-gradient(267.58deg, var(--grey-2) 0%, var(--grey-1) 80%, var(--grey-2) 100%);
        background-size: 200%;
        display: inline-block;
        border-radius: 0.4rem;

        @keyframes backgroundMovement {
          0% {
            background-position: 100%;
          }

          100% {
            background-position: -100%;
          }
        }
      }

      &--preload-width {
        width: 20rem;
      }

      &--preload-width2 {
        width: 15rem;
      }

      @include mq(sm) {
        font: var(--font-m-mobile);
        margin-bottom: 4rem;

        span {
          font: var(--font-heading-mobile);
        }
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

      @include mq(sm) {
        position: static;
        width: 100%;
        height: auto;
        margin-bottom: 4rem;
      }
    }

    &__btn {
      @include mq(sm) {
        width: 100%;
        text-align: center;
        justify-content: center;
      }
    }
  }
</style>
