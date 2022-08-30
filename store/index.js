export const state = () => ({
  modal: false,
  modalVid: false,
  mobileMenu: false,
  modalComponent: false,
  modalComponentApk: false,
  modalComponentAuto: false,
  modalComponentKDW: false
})

export const mutations = {
  SET_MODAL (state, value) {
    state.modal = value
  },
  SET_MODAL_VID (state, value) {
    state.modalVid = value
  },
  SET_MENU (state, value) {
    state.mobileMenu = value
  },
  SET_MODAL_COMPONENT (state, value) {
    state.modalComponent = value
  },
  SET_MODAL_COMPONENT_APK (state, value) {
    state.modalComponentApk = value
  },
  SET_MODAL_COMPONENT_AUTO (state, value) {
    state.modalComponentAuto = value
  },
  SET_MODAL_COMPONENT_KDW (state, value) {
    state.modalComponentKDW = value
  }
}
