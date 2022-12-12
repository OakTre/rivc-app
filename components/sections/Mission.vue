<template lang="pug">
section.section.mission(id="company")
  ._layer
  .site-container.mission__container.site-top-line
    ul.mission__list.grid-container
      li.mission__item(v-for="item in list" :key="item.id")
        .mission__item-inner
          h3.mission__item-heading {{ item.attributes.Heading }}
          p.mission__text
            | {{ item.attributes.Body }}

      li.mission__item
        .mission__item-block(v-html="text")

        .mission__item-block
          button.mission__item-btn(
            aria-label="ВОСПРОИЗВЕСТИ видео"
            @click="openModal"
          )
          img.mission__preview-img(
            :src="$store.state.strapiURL + image",
            alt="Предпросмотр для видео"
          )
</template>

<script>
export default {
  data () {
    return {
      list: [],
      text: '',
      image: '',
      loader: true,
      pageLocale: this.$i18n.locale
    }
  },
  created () {
    this.getMissionList()
    this.getAboutText()
  },
  methods: {
    openModal () {
      this.$store.commit('SET_MODAL_VID', true)
    },
    async getMissionList () {
      try {
        await this.$strapi.find('mission-goals', { locale: this.pageLocale }).then((result) => {
          this.list = result.data
          this.loader = false
        })
      } catch (error) {
        // eslint-disable-next-line no-console
        console.log('smth is wrong', error)
      }
    },
    async getAboutText () {
      try {
        await this.$strapi.find('about-text', { populate: '*', locale: this.pageLocale }).then((result) => {
          this.text = result.data.attributes.Body
          this.image = result.data.attributes.Image.data.attributes.url
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

.mission {
  position: relative;

  ._layer {
    position: absolute;
    right: -30rem;
    bottom: 0;
    width: 131.5rem;
    height: 40rem;
    background: url("~@/assets/img/mission/bg.svg");
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    -webkit-backface-visibility: hidden;
    -webkit-perspective: 1000;
    -webkit-transform: translate3d(0, 0, 0);
    -webkit-transform: translateZ(0);
    backface-visibility: hidden;
    perspective: 1000;
    transform: translate3d(0, 0, 0);
    transform: translateZ(0);
    filter: blur(210px);

    @include mq(sm) {
      display: none;
    }
  }

  &__item {
    position: relative;
    grid-column: 6 span;
    border-radius: 1.2rem;
    background: var(--gradient-main);
    padding: 1px;
    min-height: 26.7rem;
    display: flex;
    flex-direction: column;

    &:nth-child(2) {
      background: var(--gradient-kdw);

      .mission__item-inner {
        background: url("~@/assets/img/mission/item2.svg"), var(--color-bg);
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center left;
      }
    }

    &:last-child {
      grid-column: 12 span;
      background: var(--gradient-bg);
      padding: 3.3rem 0 3.3rem 7.7rem;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      min-height: 38.9rem;

      &::before {
        position: absolute;
        bottom: 3.3rem;
        left: 7.7rem;
        max-width: 38.3rem;
        width: 100%;
        height: 0.1rem;
        background-color: var(--color-white);
        content: "";
      }

      @include mq(lg) {
        padding: 3.3rem 0 3.3rem 3.3rem;
      }

      @include mq(md) {
        flex-direction: column;
        justify-content: stretch;
        align-items: stretch;
        padding: 3.2rem;

        &::before {
          display: none;
        }
      }

      @include mq(sm) {
        padding: 4.3rem 2.2rem;
      }
    }

    @include mq(sm) {
      grid-column: 4 span !important;
      min-height: 0 !important;
      border-radius: 0.8rem;
    }
  }

  &__item-inner {
    border-radius: 1.2rem;
    padding: 3.2rem 2.5rem;
    flex-grow: 1;
    background: url("~@/assets/img/mission/item1.svg"), var(--color-bg);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center left;

    @include mq(sm) {
      padding: 2.6rem 2.2rem;
      border-radius: 0.8rem;
    }
  }

  &__item-heading {
    font: var(--font-l);
    margin-bottom: 2.5rem;

    @include mq(sm) {
      font: var(--font-m-mobile);
      margin-bottom: 0.8rem;
    }
  }

  &__text {
    max-width: 37rem;
    font-weight: 700;

    @include mq(sm) {
      font: var(--font-xs);
    }
  }

  &__preview-img {
    flex-shrink: 0;
    display: block;
    height: 32.3rem;
    width: 57.5rem;
    object-fit: cover;

    @include mq(md) {
      width: 100%;
    }

    @include mq(sm) {
      height: 18.6rem;
    }
  }

  &__item-block {
    position: relative;

    p {
      margin-bottom: 1.5rem;
      max-width: 59.7rem;

      @include mq(lg) {
        margin-right: 4rem;
      }

      @include mq(md) {
        margin-right: 0;
        max-width: 100%;
      }

      @include mq(sm) {
        font: var(--font-xs);
      }

      &:nth-last-of-type(1) {
        margin-bottom: 0;
      }
    }

    @include mq(md) {
      position: relative;

      &:nth-child(2) {
        padding-top: 1.2rem;
        margin-top: 3.8rem;

        &::before {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 0.1rem;
          background-color: var(--color-white);
          content: ""
        };
      }
    }
  }

  &__item-btn {
    position: absolute;
    top: 50%;
    left: -6rem;
    width: 11.5rem;
    height: 11.5rem;
    background-color: var(--color-white);
    border-radius: 50%;
    transform: translateY(-50%);

    @include mq(md) {
      left: 50%;
      transform: translate(-50%, -50%);
    }

    @include mq(sm) {
      width: 6rem;
      height: 6rem;
    }

    &::before {
      position: absolute;
      top: 50%;
      left: 55%;
      transform: translate(-50%, -50%);
      display: inline-block;
      width: 0;
      height: 0;
      border-style: solid;
      border-width: 2rem 0 2rem 4rem;
      border-color: transparent transparent transparent var(--color-blue);
      content: "";
      transition: border-color var(--transition);

      @include mq(sm) {
        border-width: 1rem 0 1rem 2rem;
      }
    }

    &:hover {
      &::before {
        border-color: transparent transparent transparent var(--color-blue-btn);
      }
    }
  }
}
</style>
