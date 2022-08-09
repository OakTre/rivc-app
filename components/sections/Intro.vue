<template lang="pug">
  section.intro
    video.intro__bg-vid(playsinline muted autoplay loop src="@/assets/includes/vid.mp4")
</template>

<script>
export default {}
</script>

<style lang="scss">
  .intro {
    position: relative;
    height: calc(97vh - var(--header-height));
    background-color: var(--color-dark-blue);

    &__bg-vid {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
</style>
