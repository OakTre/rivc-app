<template lang="pug">
  IncludePage(
    title="Программа поддержки автоматизации СХТП"
    text="50% софинансирование"
    img="img/avto/laptop.png"
    link="https://drive.google.com/file/d/1ErAeIk1toNvUA-H2-Gz10IQz3dTLmMJo/view"
    link2=true
    btnClass="SHTP-section__btn"
    btnText="Презентация"
    class="SHTP-section"
  )
    ul.SHTP-section__list
      li.SHTP-section__item
        span.SHTP-section__item-legend I этап
        span.SHTP-section__item-text Повышение квалификации по курсу #[br] «Цифровая трансформация в АПК»
      li.SHTP-section__item
        span.SHTP-section__item-legend II этап
        span.SHTP-section__item-text Анализ предприятия
      li.SHTP-section__item
        span.SHTP-section__item-legend III этап
        span.SHTP-section__item-text Комплексное внедрение систем автоматизации, #[br] обучение профильных специалистов СХТП
</template>

<script>
import IncludePage from '@/components/IncludePage'

export default {
  name: 'SHTPSection',
  components: {
    IncludePage
  }
}
</script>

<style lang="scss">
</style>
