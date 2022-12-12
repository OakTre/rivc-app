<template lang="pug">
section.section.inlcude-page
  .site-container(v-if="list.data")
    h1.site-heading.inlcude-page__heading
      | {{ list.data.attributes.Heading }}
    .inlcude-page__body(v-html="list.data.attributes.Body")
</template>
<script>
export default {
  data() {
    return {
      list: [],
      pageLocale: this.$i18n.locale,
    };
  },
  created() {
    this.getPolicy();
  },
  methods: {
    async getPolicy() {
      try {
        await this.$strapi
          .find("policy", { locale: this.pageLocale })
          .then((result) => {
            this.list = result;
          });
      } catch (error) {
        // eslint-disable-next-line no-console
        console.log("smth is wrong", error);
      }
    },
  },
};
</script>
<style lang="scss">
@import "~@/assets/styles/global/helpers/mixins";
@import "~@/assets/styles/global/helpers/media";

.inlcude-page {
  padding-top: 5rem;

  &__heading {
    text-align: center;
    color: #fff;

    @include mq(sm) {
      font: 700 2.6rem/2.4rem var(--main-ff);
    }
  }

  &__body {
    h2,
    h3,
    h4,
    h5,
    h6 {
      margin: 3rem 0 4rem;
      font: 700 2rem/2.4rem var(--main-ff);

      @include mq(sm) {
        margin: 1.5rem 0 2rem;
      }
    }

    strong {
      font-weight: 700;
    }

    p {
      margin: 2rem 0;

      @include mq(sm) {
        margin: 1.5rem 0;
      }
    }

    ul {
      margin: 2rem 0;
      @include mq(sm) {
        margin: 1.5rem 0;
      }
    }
  }
}
</style>
