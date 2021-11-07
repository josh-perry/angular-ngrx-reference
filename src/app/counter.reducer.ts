import { createReducer, on } from '@ngrx/store';
import { increment, decrement, reset } from './counter.actions';

import { AppState } from './app.state';

export const initialState = {
  value: 0
}

const newState = (state: AppState, newData: AppState) => {
  return Object.assign({}, state, newData);
}

export const counterReducer = createReducer(
  initialState,
  on(increment, (state) => newState(state, { value: state.value + 1 })),
  on(decrement, (state) => newState(state, { value: state.value - 1 })),
  on(reset, (state) => newState(state, { value: 0 }))
);
