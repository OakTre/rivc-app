<template lang="pug">
  article.news-card
    img(:src="image" :alt="name" class="news-card__image")
    header.news-card__info
      span.news-card__date
        | {{ date }}
      h3.news-card__heading
        a(href="#" @click.prevent="openArticle(id)")
          | {{ name }}
</template>
<script>
export default {
  props: {
    name: {
      type: String,
      required: true
    },
    date: {
      type: String,
      required: true
    },
    image: {
      type: String,
      required: true
    },
    id: {
      type: Number,
      required: true
    }
  },
  methods: {
    openArticle (id) {
      this.$router.push('/news/' + id)
    }
  }
}
</script>
<style lang="scss">
  @import "~@/assets/styles/global/helpers/mixins.scss";
  @import '~@/assets/styles/global/helpers/media';

  .news-card {
    display: block;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    position: relative;
    z-index: 2;
    border-radius: 1.2rem;
    overflow: hidden;

    &__image {
      width: 100%;
      height: auto;
      object-fit: cover;
    }

    &__info {
      padding: 2.4rem;
      min-height: 11.7rem;
      background-color: #fff;
      color: #11132D;
      flex-grow: 1;

      @include mq(sm) {
        padding: 2rem;
        min-height: 0;
      }
    }

    &__date {
      display: block;
      margin-bottom: 0.8rem;
      font-family: 'Montserrat';
      font-weight: 400;
      font-size: 1.8rem;
      line-height: 2.2rem;

      @include mq(sm) {
        font: 400 1.2rem/1.5rem "Montserrat", sans-serif;
      }
    }

    &__heading {
      font: 700 1.8rem/2.2rem "Montserrat", sans-serif;
      max-width: 45.6rem;

      a {
        &::before {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 0;
          content: "";
        }

        &:hover {
          color: #2966FF;
        }
      }

      @include mq(sm) {
        font: 700 1.4rem/1.7rem "Montserrat", sans-serif;
      }
    }

    @include mq(sm) {
      border-radius: 1rem;
    }
  }
</style>
