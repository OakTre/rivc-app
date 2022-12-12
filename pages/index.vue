<template lang="pug">
  div
    Intro
    IntroAdvantages
    Projects
    Increase
    Mission
    WhyUs
    News
    Partners
    ContactUs
</template>

<script>
import Intro from '@/components/sections/Intro'
import IntroAdvantages from '@/components/sections/IntroAdvantages'
import Projects from '@/components/sections/Projects'
import Increase from '@/components/sections/Increase'
import Mission from '@/components/sections/Mission'
import WhyUs from '@/components/sections/WhyUs'
import Partners from '@/components/sections/Partners'
import ContactUs from '@/components/sections/ContactUs'
import News from '@/components/sections/News'

export default {
  name: 'IndexPage',
  components: {
    Intro,
    IntroAdvantages,
    Projects,
    Increase,
    Mission,
    WhyUs,
    Partners,
    ContactUs,
    News
  }
}
</script>
