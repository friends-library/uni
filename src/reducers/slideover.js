export default (state = { open: false }, action = {}) => {
  switch (action.type) {
    case 'SLIDEOVER_TOGGLE':
      return {
        ...state,
        open: !state.open
      }
    default:
      return state
  }
}
