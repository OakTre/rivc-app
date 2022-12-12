<template lang="pug">
  section.section.advantages
    .site-container.advantages__cantainer
      .advantages__loader(v-if='loader')
        ul.advantages__list.grid-container
          li.advantages__item.advantages__item--loader
          li.advantages__item.advantages__item--loader
          li.advantages__item.advantages__item--loader
      ul.advantages__list.grid-container
        li.advantages__item(v-for="item in list.data" :key="item.id")
          .advantages__img-wrapper
            img(:src="$store.state.strapiURL + item.attributes.Image.data.attributes.url" :alt="item.attributes.Image.data.attributes.caption" class="advantages__img")
          p
            | {{ item.attributes.Description }}
</template>

<script>
export default {
  data () {
    return {
      list: [],
      loader: true,
      pageLocale: this.$i18n.locale
    }
  },
  created () {
    this.getAdvItems()
  },
  methods: {
    async getAdvItems () {
      try {
        // eslint-disable-next-line quote-props
        await this.$strapi.find('advantages', { populate: '*', locale: this.pageLocale }).then((result) => {
          this.list = result
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

<style lang="scss" scoped>
@import '~@/assets/styles/global/helpers/media';

.advantages {
  position: relative;
  z-index: 1;
  margin-top: -9.7rem;

  &__item {
    grid-column: 4 span;
    padding: 6.4rem;
    border-radius: 1.2rem;
    background-color: var(--color-dark-blue);
    border: 1px solid var(--color-dark-blue2);
    --grey-2: var(--color-dark-blue);
    --grey-1: var(--color-dark-blue2);

    &--loader {
      min-height: 29.5rem;

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

      @include mq(sm) {
        min-height: 21.6rem;
      }
    }

    @keyframes backgroundMovement {
      0% {
        background-position: 100%;
      }

      100% {
        background-position: -100%;
      }
    }

    @include mq(lg) {
      padding: 3.2rem;
    }

    @include mq(md) {
      grid-column: 12 span;
      display: flex;
    }

    @include mq(sm) {
      grid-column: 4 span;
      flex-direction: column;
      padding: 3.7rem 2.3rem;
      border-radius: 0.8rem;
    }

    p {
      font: var(--font-m);
      max-width: 25.6rem;

      b, strong {
        font-weight: 700;
      }

      @include mq(sm) {
        font: var(--font-xs);
      }
    }
  }

  &__img-wrapper {
    width: 10.6rem;
    height: 8.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid var(--color-dark-blue2);
    margin-bottom: 3.2rem;
    border-radius: 1rem;

    img {
      width: 5.7rem;
      height: 5.7rem;
      object-fit: cover;
    }

    @include mq(md) {
      margin-bottom: 0;
      margin-right: 3.2rem;
    }

    @include mq(sm) {
      width: 7.1rem;
      height: 5.1rem;
      margin: 0;
      margin-bottom: 1.7rem;
      border-radius: 0.6rem;

      img {
        width: 3.5rem;
        height: 3.5rem;
      }
    }
  }
}
</style>
