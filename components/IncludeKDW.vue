<template lang="pug">
  IncludePage(
    title="Kazan Digital Week – 2022"
    text="Блок: Цифровые технологии в сфере сельского хозяйства"
    img="img/kdw/laptop.png"
    link="https://kdw-agro.com/"
    btnClass="KDW-section__btn"
    class="KDW-section"
  )
    .KDW-section__info
      span.KDW-section__legend-small Международный форум
      span.KDW-section__legend-big 21-24 сентября
      span.KDW-section__legend-small Выставочный центр «Казань Экспо», г. Казань

    .KDW-section__feautures
      h3 Демонстрация успешных результатов автоматизации и цифровизации АПК РТ
    .KDW-section__list
      .KDW-section__item
        span.KDW-section__legend
          | 4 320 мин.
        span.KDW-section__legend-text
          | Обмена опытом по цмфровой трансформации АПК
      .KDW-section__item
        span.KDW-section__legend
          | 1 000 м
        span.KDW-section__legend-text
          | Площадь блока АПК
</template>

<script>
import IncludePage from '@/components/IncludePage'

export default {
  name: 'KDWSection',
  components: {
    IncludePage
  }
}
</script>

<style lang="scss">
</style>
