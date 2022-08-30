import Vue from 'vue'
import ModalComponent from '@/components/ModalComponent'
import IncludePage from '@/components/IncludePage'

const components = { ModalComponent, IncludePage }

Object.entries(components).forEach(([name, component]) => {
  Vue.component(name, component)
})
