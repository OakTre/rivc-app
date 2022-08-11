export const state = () => ({
  modal: false
})

export const mutations = {
  SET_MODAL (state, value) {
    state.modal = value
  }
}
