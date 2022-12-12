<template lang="pug">
section.news.section(id="news" v-if="this.$i18n.locale === 'ru'")
  .site-container.partners__container.site-top-line
    h2.site-heading.partners__heading {{ title }}
    ul.grid-container.news-container
      li.news-container__item(v-for="item in newsList", :key="item.id" v-if="item.id <= 2")
        NewsCard(:name="item.attributes.Heading" :date="item.attributes.Date" :image="$store.state.strapiURL + item.attributes.Image.data.attributes.url" :id="item.id")
    nuxt-link.button.button--secondary.news__btn(no-prefetch to="/news")
      span.button__txt
        | {{ titleBtn }}
</template>
<script>
import NewsCard from '@/components/UI/NewsCard'
import Button from '@/components/UI/Button'

export default {
  name: 'News',
  components: {
    NewsCard,
    Button
  },
  data () {
    return {
      newsList: [],
      title: 'Новости',
      titleBtn: 'Все новости',
      pageLocale: this.$i18n.locale,
      loader: true
    }
  },
  created () {
    this.setInfo()
    this.getNewsItems()
  },
  methods: {
    setInfo () {
      this.title = this.pageLocale === 'en' ? 'News' : 'Новости'
      this.titleBtn = this.pageLocale === 'en' ? 'All News' : 'Все новости'
    },
    async getNewsItems () {
      try {
        // eslint-disable-next-line quote-props
        await this.$strapi.find('articles', { populate: '*', locale: this.pageLocale }).then((result) => {
          this.newsList = result.data
          this.loader = false
          this.$store.commit('SET_NEWS', result.data)
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
  @import "~@/assets/styles/global/helpers/mixins.scss";
  @import '~@/assets/styles/global/helpers/media';

  .news-container {
    &__item {
      grid-column: 6 span;

      @include mq(custom, max, 780) {
        grid-column: 12 span;
      }
    }
  }

  .news__btn {
    display: inline-block;
    margin-top: 4.4rem;
  }
</style>
