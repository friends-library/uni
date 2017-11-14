// @flow
import type { Action } from 'type';

type SlideoverState = {
  open: boolean,
};

export default (state: SlideoverState = { open: false }, action: Action) => {
  switch (action.type) {
    case 'SLIDEOVER_TOGGLE':
      return {
        ...state,
        open: !state.open,
      };
    default:
      return state;
  }
};
