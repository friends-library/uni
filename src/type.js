// @flow
import Friend from 'classes/Friend';

export type SlideoverState = {|
  transitioning: boolean,
  open: boolean,
|};

export type State = {
  friends: {
    [string]: Friend,
  },
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
