import { createAction } from '@ngrx/store';

// export const increment = (type: string) => createAction(`[Counter] ${type}`);
export const increment = createAction('[Counter] Increase');
export const decrement = createAction('[Counter] Decrease');
export const multiply = createAction('[Counter] Multiply');
export const divide = createAction('[Counter] Divide');
export const reset = createAction('[Counter] Reset');
