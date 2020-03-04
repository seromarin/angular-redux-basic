import { createAction, props } from '@ngrx/store';

// export const increment = (type: string) => createAction(`[Counter] ${type}`);
export const increment = createAction('[Counter] Increase', props<{operator: number}>());
export const decrement = createAction('[Counter] Decrease', props<{operator: number}>());
export const multiply = createAction('[Counter] Multiply');
export const divide = createAction('[Counter] Divide');
export const reset = createAction('[Counter] Reset');
