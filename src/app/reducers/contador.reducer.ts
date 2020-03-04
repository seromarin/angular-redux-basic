import { Action, on, createReducer } from '@ngrx/store';
import { increment, decrement, reset, multiply, divide } from '../actions/counter.action';


export const initialState = 0;

const _counterReducer = createReducer(initialState,
  on(increment, state => state + 1),
  on(decrement, state => state - 1),
  on(multiply, state => state * 2),
  on(divide, state => state <= 0 ? Math.ceil(state / 2) : Math.floor(state / 2)),
  on(reset, state => 0),
);

export function counterReducer(state, action) {
  return _counterReducer(state, action);
}


// export function counterReducer(
//   state: number = 0,
//   action: Action
// ) {

//   let newState;

//   switch (action.type) {
//     case INCREASE:
//       newState = state += 1;
//       break;
//     case DECREASE:
//       newState = state -= 1;
//       break;
//     case 'MULTIPLY':
//       newState = state *= 2;
//       break;
//     case 'DIVIDE':
//       newState = state /= 2;
//       break;
//     case 'RESET':
//       newState = 0;
//       break;
//     default:
//       newState = state;
//       break;
//   }

//   return newState;

// }
