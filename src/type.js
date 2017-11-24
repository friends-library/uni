// @flow
import { Map } from 'immutable';

export type SlideoverState = {|
  transitioning: boolean,
  open: boolean,
|};

export type State = {
  friends: Map<string, Map<string, *>>,
  page: string,
  slideover: SlideoverState,
  location: {|
    payload: Object,
  |},
}

export type SuccessAction = {
  type: string,
  payload?: Object,
  meta?: *,
};

export type ErrorAction = {
  type: string,
  payload: Error,
  error: true,
}

export type Action = SuccessAction | ErrorAction;

export type Dispatch = (action: Action) => *;

export type GetState = () => State;
