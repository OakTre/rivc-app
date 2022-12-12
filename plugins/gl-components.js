import Vue from 'vue'
import ModalComponent from '@/components/ModalComponent'
import IncludePage from '@/components/IncludePage'
import Loader from '@/components/UI/Loader'

const components = { ModalComponent, IncludePage, Loader }

Object.entries(components).forEach(([name, component]) => {
  Vue.component(name, component)
})
