<template lang="pug">
section.partners.section
  .site-container.partners__container.site-top-line
    h2.site-heading.partners__heading Наши партнеры
    ul.partners__list.grid-container
      li.partners__item(v-for="item in partnersList", :key="item.id")
        a.partners__link(:href="item.link", target="_blank")
          img.partners__img(:src="getDynamicFile(item.img)", alt="Лого")
</template>

<script>
export default {
  data () {
    return {
      partnersList: [
        { id: 1, img: 'img/partners/img1.svg', link: 'https://regagro.ru/' },
        { id: 2, img: 'img/partners/img2.svg', link: '/' },
        { id: 3, img: 'img/partners/img3.svg', link: 'https://innopolis.university' },
        { id: 4, img: 'img/partners/img4.svg', link: '/' },
        { id: 5, img: 'img/partners/img5.svg', link: '/' },
        { id: 6, img: 'img/partners/img6.svg', link: '/' },
        { id: 7, img: 'img/partners/img7.svg', link: '/' }
      ]
    }
  }
}
</script>

<style lang="scss">
@import '~@/assets/styles/global/helpers/media';

.partners {
  &__item {
    grid-column: 3 span;
    position: relative;

    @include mq(md) {
      grid-column: 6 span;
    }

    @include mq(sm) {
      grid-column: 4 span;
    }
  }

  &__link {
    border-radius: 1.2rem;
    border: 1px solid var(--color-dark-blue2);
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--color-dark-blue);
    height: 13.1rem;

    img {
      max-width: 54%;
      height: auto;
      object-fit: contain;
    }

    @include mq(sm) {
      height: 9.8rem;

      img {
        width: auto;
      }
    }
  }
}
</style>
