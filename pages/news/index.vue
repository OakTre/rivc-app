<template lang="pug">
  section.section.news-page
    .site-container
      h2.site-heading.news-page__heading
        | {{ title }}
      ul.news-page__list.grid-container
        li.news-page__item(v-for="item in $store.state.news", :key="item.id")
          NewsCard(:name="item.attributes.Heading" :image="$store.state.strapiURL + item.attributes.Image.data.attributes.url" :id="item.id")

</template>
<script>
import NewsCard from '@/components/UI/NewsCard'

export default {
  name: 'NewsPage',
  components: {
    NewsCard
  },
  data () {
    return {
      newsPageList: [],
      title: 'Новости компании',
      pageLocale: this.$i18n.locale
    }
  },
  created () {
    this.setInfo()
  },
  methods: {
    setInfo () {
      this.title = this.pageLocale === 'en' ? 'Company News' : 'Новости компании'
    }
  }
}
</script>

<style lang="scss">
  @import "~@/assets/styles/global/helpers/mixins.scss";
  @import '~@/assets/styles/global/helpers/media';

  .news-page {
    &__heading {
      text-align: center;
      margin-top: 10rem;
      margin-bottom: 8rem;

      @include mq(md) {
        margin-top: 4.2rem;
        margin-bottom: 2.6rem;
      }
    }

    &__item {
      grid-column: 6 span;
    }
  }
</style>
