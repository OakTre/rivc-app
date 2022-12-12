<template lang="pug">
section.section.news-detail
  .site-container
    .news-detail__heading-legend.site-heading
      | Новости
    h1.news-detail__heading
      | {{ article.data.attributes.Heading }}
    img.news-detail__image(
      :src="$store.state.strapiURL + article.data.attributes.Image.data.attributes.url",
      alt="alt"
    )
    .news-detail__content
      .news-detail__date
        | {{ article.data.attributes.Date }}
      .news-detail__heading._mobile
        | {{ article.data.attributes.Heading }}
      .news-detail__content-inner(v-html="article.data.attributes.Body")
        //- pre
        //-   | {{ article }}
    .news-detail__btn-wrapper
      nuxt-link.button.button--secondary.news-detail__btn(
        no-prefetch,
        to="/news"
      )
        span.button__txt
          | Все новости
</template>
<script>
export default {
  async asyncData ({ $strapi, i18n, params }) {
    const article = await $strapi.findOne('articles', params.id, { populate: '*', locale: i18n.pageLocale })
    return {
      article
    }
  },
  data () {
    return {
      list: [],
      loader: true,
      pageLocale: this.$i18n.locale
    }
  },
  methods: {
    setInfo () {
      this.title = this.pageLocale === 'en' ? 'News' : 'Новости'
      this.titleBtn = this.pageLocale === 'en' ? 'All News' : 'Все новости'
    }
  }
}
</script>
<style lang="scss">
@import "~@/assets/styles/global/helpers/mixins.scss";
@import "~@/assets/styles/global/helpers/media";

.news-detail {
  &__heading-legend {
    display: none;
    margin-top: 4.2rem;
    margin-bottom: 2.6rem;

    @include mq(sm) {
      display: block;
      text-align: center;
    }
  }

  &__heading {
    font: 700 4.5rem/5.5rem "Montserrat";
    color: #fff;
    margin-top: 10.8rem;

    &._mobile {
      display: none;
    }

    @include mq(sm) {
      font: 700 1.4rem/1.7rem "Montserrat";
      display: none;
      color: #000;

      &._mobile {
        display: block;
        margin-bottom: 2.4rem;
        margin-top: 0;
      }
    }
  }

  &__image {
    width: 100%;
    height: auto;
    object-fit: contain;
    margin-top: 5rem;
    border-radius: 1.2rem 1.2rem 0 0;

    @include mq(sm) {
      margin-top: 0;
    }
  }

  &__date {
    font: 400 1.8rem/2.2rem "Montserrat";
    margin-bottom: 2.4rem;
    color: #2966ff;

    @include mq(sm) {
      margin-bottom: 0.4rem;
      font: 400 1.2rem/1.5rem "Montserrat";
    }
  }

  &__content {
    padding: 2.4rem;
    background: #fff;
    font: 400 1.8rem/2.2rem "Montserrat";
    color: #000;
    border-radius: 0 0 1.2rem 1.2rem;

    @include mq(sm) {
      font: 400 1.2rem/1.5rem "Montserrat";
    }

    &-inner {
      max-width: 90%;

      @include mq(sm) {
        max-width: 100%;
      }
    }

    p {
      margin-bottom: 2rem;

      &:nth-of-type(1) {
        margin-bottom: 0;
      }

      @include mq(sm) {
        margin-bottom: 1.3rem;
      }
    }

    a {
      color: #2966ff;

      &:hover {
        color: #000;
      }
    }

    ul {
      margin: 2rem 0;
    }
  }

  &__btn {
    display: inline-block;
  }

  &__btn-wrapper {
    display: inline-block;
    margin-top: 4.4rem;

    @include mq(sm) {
      margin-top: 3.3rem;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
}
</style>
