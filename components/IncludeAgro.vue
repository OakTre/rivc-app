<template lang="pug">
  IncludePage(
    title="ГИС АПК РТ Агрополия"
    text="Единая цифровая экосистема данных АПК Республики Татарстан"
    img="img/agro/laptop.png"
    link="https://agropoliya.ru/"
    btnClass="button--secondary"
    class="agro-section"
  )
    h3.agro-section__legend
      | 19 проектов по цифровизации
    p.agro-section__text
      | АПК для достижения цифровой зрелости
    h3.agro-section__legend
      | 8 проектов по цифровизации
    p.agro-section__text
      | Программа автоматизации агробизнеса на стадии опытной эксплуатации
    .agro-section__feautures
      p.agro-section__feat-heading Преимущества:
      ul
        li(v-for="item in list")
          | {{ item }}
</template>

<script>
import IncludePage from '@/components/IncludePage'
import Button from '@/components/UI/Button'

export default {
  name: 'AgropoliyaSection',
  components: {
    IncludePage,
    Button
  },
  data () {
    return {
      list: [
        'Аналитика на основе корректных данных',
        'Единая система сбора и хранения данных по всем направлениям',
        'Автоматическая передача данных в другие ГИС',
        'Прозрачность статистики',
        'Возможность упрощенной подачи документов на субсидии'
      ]
    }
  }
}
</script>

<style lang="scss">
</style>
