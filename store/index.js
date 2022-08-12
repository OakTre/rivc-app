export const state = () => ({
  modal: false,
  modalVid: false,
  mobileMenu: false
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
  }
}
