import { createReducer, on } from '@ngrx/store';
import { increment, decrement, reset } from './counter.actions';

export interface CounterState {
  value: number;
}

export const initialState = {
  value: 0
}

const newState = (state: CounterState, newData: CounterState) => {
  return Object.assign({}, state, newData);
}

export const counterReducer = createReducer(
  initialState,
  on(increment, (state) => newState(state, { value: state.value + 1 })),
  on(decrement, (state) => newState(state, { value: state.value - 1 })),
  on(reset, (state) => newState(state, { value: 0 }))
);
