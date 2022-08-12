<template lang="pug">
  section.intro
    h1.visually-hidden РИВЦ – центр притяжения цифровых технологий в АПК
    .intro__mobile(v-if="$device.isMobileOrTablet")
      ._layer
      .site-container
        .intro__mobile-heading
          img(src='@/assets/img/mob-text.svg' alt="alt")
    video.intro__bg-vid(
      playsinline muted autoplay loop
      src="@/assets/includes/vid.mp4"
      v-else
    )

</template>

<script>
export default {}
</script>

<style lang="scss">
@import '~@/assets/styles/global/helpers/media';

  .intro {
    position: relative;
    height: calc(100vh - var(--header-height));
    background-color: var(--color-dark-blue);

    @include mq(md) {
      height: 62rem;
      background: url("~@/assets/img/intro-bg.svg"), var(--color-bg);
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center;
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
        z-index: -1;
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
    }

    &__mobile-heading {
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
