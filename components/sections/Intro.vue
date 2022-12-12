<template lang="pug">
  section.intro
    h1.visually-hidden РИВЦ – центр притяжения цифровых технологий в АПК

    .intro__loader(v-if='loader')

    .intro__mobile(v-if="$device.isMobileOrTablet")
      ._layer
      .site-container
        .intro__mobile-heading
          img(src='@/assets/img/mob-text.svg' alt="alt")
    video.intro__bg-vid(
      playsinline muted autoplay loop
      :src="$store.state.strapiURL + vidUrl"
      v-else
    )

</template>

<script>
import Loader from '@/components/UI/Loader'

export default {
  components: {
    Loader
  },
  data () {
    return {
      vidUrl: '',
      loader: true
    }
  },
  created () {
    this.getIntro()
  },
  methods: {
    async getIntro () {
      try {
        // eslint-disable-next-line quote-props
        await this.$strapi.find('intro', { populate: '*' }).then((result) => {
          this.vidUrl = result.data.attributes.video.data.attributes.url
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

  .intro {
    position: relative;
    height: calc(100vh - var(--header-height));
    background-color: var(--color-dark-blue);
    --grey-2: var(--color-dark-blue);
    --grey-1: var(--color-dark-blue2);

    &__loader {
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      animation-duration: 1.5s;
      animation-fill-mode: forwards;
      animation-iteration-count: infinite;
      animation-name: backgroundMovement;
      animation-timing-function: linear;
      background: var(--grey-2);
      background: linear-gradient(267.58deg, var(--grey-2) 0%, var(--grey-1) 80%, var(--grey-2) 100%);
      background-size: 200%;
      display: inline-block;
    }

    @keyframes backgroundMovement {
      0% {
        background-position: 100%;
      }

      100% {
        background-position: -100%;
      }
    }

    @include mq(md) {
      height: 62rem;
      background: url("~@/assets/img/intro-bg2.svg"), var(--color-bg);
      background-repeat: no-repeat;
      background-size: cover;
      background-position: 100% 10%;

      &::before {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 36rem;
        background: linear-gradient(0deg, rgba(17,19,45,1) 15%, rgba(0,0,0,0) 86%);
        content: "";
      }
    }

    &__bg-vid {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    &__mobile {
      position: relative;
      z-index: 1;
      height: 100%;
      padding-top: 13.8rem;

      ._layer {
        position: absolute;
        top: 20%;
        left: 40%;
        z-index: 0;
        width: 100%;
        height: 90rem;
        background-image: url('~@/assets/img/intro-bg-blur.svg');
        background-repeat: no-repeat;
        background-size: contain;
        background-position: center;
        -webkit-backface-visibility: hidden;
        -webkit-perspective: 1000;
        -webkit-transform: translate3d(0, 0, 0);
        -webkit-transform: translateZ(0);
        backface-visibility: hidden;
        perspective: 1000;
        transform: translate3d(0, 0, 0);
        transform: translateZ(0);
        transform: translate(-50%, -50%);
        filter: blur(180px);
      }

      .site-container {
        height: 100%;
      }

      @include mq(custom, max, 475) {
        padding-top: 8rem;
      }
    }

    &__mobile-heading {
      position: relative;
      z-index: 1;

      img {
        width: 51%;
        height: auto;

        @include mq(sm) {
          width: 87%;
        }
      }
    }
  }
</style>
