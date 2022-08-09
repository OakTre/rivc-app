<template lang="pug">
section.partners.section
  .site-container.partners__container
    h2.site-heading.partners__heading Наши партнеры
    ul.partners__list.grid-container
      li.partners__item(v-for="item in partnersList", :key="item.id")
        a.partners__link(href="/", target="_blank")
          img.partners__img(src="@/assets/img/partners/img1.svg", alt="Лого")
</template>

<script>
export default {
  data () {
    return {
      partnersList: [
        { id: 1 },
        { id: 2 },
        { id: 3 },
        { id: 4 },
        { id: 5 },
        { id: 6 },
        { id: 7 },
        { id: 8 }
      ]
    }
  }
}
</script>

<style lang="scss">
.partners {
  &__container {
    position: relative;
    padding-top: 6.5rem;

    &::before {
      position: absolute;
      top: 0;
      left: 0;
      width: 38.3rem;
      height: 0.1rem;
      background: var(--gradient-main);
      content: "";
    }
  }

  &__item {
    grid-column: 3 span;
    position: relative;
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
      width: 17.6rem;
      height: 5rem;
      object-fit: cover;
    }
  }
}
</style>
