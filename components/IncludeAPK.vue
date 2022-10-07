<template lang="pug">
  IncludePage(
    title="Программа повышения калификации «Цифровая трансформация в АПК»"
    img="img/kval/laptop.png"
    link="https://edu.agropoliya.ru/"
    btnClass="apk-section__btn"
    class="apk-section"
  )
    .apk-section__list
      .apk-section__item
        span.apk-section__legend
          | 50%
        span.apk-section__legend-text
          | софинансирование
      .apk-section__item
        span.apk-section__legend
          | 7
        span.apk-section__legend-text
          | дневной интенсив
      .apk-section__item
        span.apk-section__legend
          | 50
        span.apk-section__legend-text
          | часов практики
    .apk-section__feautures
      p.apk-section__feat-heading Преимущества:
      ul
        li(v-for="item in list")
          | {{ item }}
    .apk-section__list
      .apk-section__item
        span.apk-section__legend
          | 39
        span.apk-section__legend-text
          | хозяйств прошли обучение
      .apk-section__item
        span.apk-section__legend
          | 29
        span.apk-section__legend-text
          | Хозяйств прошли отбор, находятся на этапе анализа
</template>

<script>
import IncludePage from '@/components/IncludePage'

export default {
  name: 'APKSection',
  components: {
    IncludePage
  },
  data () {
    return {
      list: [
        'Трансформация управленческих компетенций',
        'Индивидуальный план цифрового развития хозяйства'
      ]
    }
  }
}
</script>

<style lang="scss">
</style>
