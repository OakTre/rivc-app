<template lang="pug">
section.partners.section
  .site-container.partners__container.site-top-line
    h2.site-heading.partners__heading
      | {{ title }}
    ul.partners__list.grid-container(v-if="loader")
      li.partners__item.partners__item--loader
        .partners__link
      li.partners__item.partners__item--loader
        .partners__link
      li.partners__item.partners__item--loader
        .partners__link
      li.partners__item.partners__item--loader
        .partners__link
    ul.partners__list.grid-container
      li.partners__item(v-for="item in partnersList", :key="item.id")
        a.partners__link(:href="item.attributes.Link", target="_blank")
          img.partners__img(:src="$store.state.strapiURL + item.attributes.Logo.data.attributes.url", alt="Лого")
</template>

<script>
export default {
  data () {
    return {
      partnersList: [],
      loader: true,
      pageLocale: this.$i18n.locale,
      title: 'Наши партнеры'
    }
  },
  created () {
    this.getPartnerItems()
    this.settitle()
  },
  methods: {
    settitle () {
      this.title = this.pageLocale === 'en' ? 'Our Partners' : 'Наши партнеры'
    },
    async getPartnerItems () {
      try {
        // eslint-disable-next-line quote-props
        await this.$strapi.find('partners', { populate: '*' }).then((result) => {
          this.partnersList = result.data
          this.loader = false
        })
      } catch (error) {
        // eslint-disable-next-line no-console
        console.log('smth is wrong', error)
      }
    }
  }
}
</script>

<style lang="scss">
@import '~@/assets/styles/global/helpers/media';

.partners {
  &__item {
    grid-column: 3 span;
    position: relative;

    @include mq(md) {
      grid-column: 6 span;
    }

    @include mq(sm) {
      grid-column: 4 span;
    }

    &--loader {
      .partners__link {
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
        width: 100%;
      }

      @keyframes backgroundMovement {
        0% {
          background-position: 100%;
        }

        100% {
          background-position: -100%;
        }
      }
    }
  }

  &__link {
    border-radius: 1.2rem;
    border: 1px solid var(--color-dark-blue2);
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--color-dark-blue);
    height: 13.1rem;

    img {
      max-width: 54%;
      height: auto;
      object-fit: contain;
    }

    @include mq(sm) {
      height: 9.8rem;

      img {
        width: auto;
      }
    }
  }
}
</style>
