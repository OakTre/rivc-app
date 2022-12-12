<template lang="pug">
section.section.why-us
  .site-container.why-us__container.site-top-line
    h2.why-us__heading.site-heading {{ title }}
    ul.why-us__list.grid-container
      li.why-us__item(v-for="item in whyList" :key="item.id")
        .why-us__item-inner
          h3.why-us__item-heading {{ item.attributes.Heading }}
          .why-us__item-text(v-html="item.attributes.Description")
</template>

<script>
export default {
  data () {
    return {
      whyList: [],
      title: 'Почему РИВЦ',
      loader: true,
      pageLocale: this.$i18n.locale
    }
  },
  created () {
    this.getWhyList()
    this.setInfo()
  },
  methods: {
    async getWhyList () {
      try {
        await this.$strapi.find('why-uses', { locale: this.pageLocale }).then((result) => {
          this.whyList = result.data
          this.loader = false
        })
      } catch (error) {
        // eslint-disable-next-line no-console
        console.log('smth is wrong', error)
      }
    },
    setInfo () {
      this.title = this.pageLocale === 'en' ? 'Why Us' : 'Почему РИВЦ'
    }
  }
}
</script>

<style lang='scss'>
@import '~@/assets/styles/global/helpers/media';

.why-us {
  &__item {
    grid-column: 6 span;
    display: flex;
    flex-direction: column;
    background: var(--gradient-main);
    padding: 1px;
    border-radius: 1.2rem;
    min-height: 44.5rem;

    @include mq(md) {
      grid-column: 12 span;
      min-height: 33.5rem;
    }

    @include mq(sm) {
      border-radius: 0.8rem;
      min-height: 0;
      grid-column: 4 span;
    }

    &:nth-child(2) {
      background: var(--gradient-bg);

      .why-us__item-inner {
        background: url("~@/assets/img/why-us/img2.svg"), var(--color-bg);
        background-repeat: no-repeat;
        background-size: contain;
        background-position: bottom right;
      }
    }

    &:nth-child(3) {
      background: var(--gradient-bg);

      .why-us__item-inner {
        background: url("~@/assets/img/why-us/img3.svg"), var(--color-bg);
        background-repeat: no-repeat;
        background-size: contain;
        background-position: bottom right;
      }
    }

    &:nth-child(4) {
      .why-us__item-inner {
        background: url("~@/assets/img/why-us/img4.svg"), var(--color-bg);
        background-repeat: no-repeat;
        background-size: contain;
        background-position: bottom right;
      }
    }
  }

  &__item-inner {
    flex-grow: 1;
    border-radius: 1.2rem;
    padding: 3.3rem 2.5rem;
    background: url("~@/assets/img/why-us/img1.svg"), var(--color-bg);
    background-repeat: no-repeat;
    background-size: contain;
    background-position: bottom right;

    @include mq(sm) {
      border-radius: 0.8rem;
      padding: 3.3rem 2rem 16rem 2rem;
    }
  }

  &__item-heading {
    font: var(--font-l);
    margin-bottom: 2.5rem;

    @include mq(sm) {
      font: var(--font-m-mobile);
      margin-bottom: 1.4rem;
    }
  }

  &__item-text {
    font: var(--font-m);
    max-width: 59rem;

    @include mq(sm) {
      font: var(--font-xs);
    }

    p {
      margin-bottom: 1rem;

      b,
      strong {
        font-weight: 700;
      }

      &:nth-last-of-type(1) {
        margin-bottom: 0;
      }
    }
  }
}
</style>
