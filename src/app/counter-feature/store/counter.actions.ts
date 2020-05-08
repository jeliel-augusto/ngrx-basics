import {createAction, props} from '@ngrx/store'
import {CounterState} from "./counter.reducers";

export const counterFeatureKey = 'counterFeature'
export const incrementAction = createAction(
    '[Counter Feature] Increment'
)
export const decrementAction = createAction(
    '[Counter Feature] Decrement'
)
export const resetAction = createAction(
    '[Counter Feature] Reset'
)
export const saveAction = createAction(
    '[Counter Feature] Save'
)
export const setStateCounterFeature = createAction(
  '[Counter Feature] Set State',
  props<CounterState>()
)
export const saveStateSuccess = createAction(
  '[Counter Feature] Save state success'
)
export const saveStateNotSuccess = createAction(
  '[Counter Feature] Save state failure',
  props<{error: string}>()
)
export const loadState = createAction(
  '[Counter Feature] Load State'
)
export const setState = createAction(
  '[Counter Feature] Set State',
  props<CounterState>()
)
