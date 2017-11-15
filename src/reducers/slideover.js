// @flow
import type { Action, SlideoverState } from 'type';

const init = {
  open: false,
  transitioning: false,
};

export default (state: SlideoverState = init, action: Action) => {
  switch (action.type) {
    case 'SLIDEOVER_TOGGLE':
      return {
        ...state,
        open: !state.open,
        transitioning: true,
      };
    case 'SLIDEOVER_TRANSITION_END':
      return {
        ...state,
        transitioning: false,
      };
    default:
      return state;
  }
};
