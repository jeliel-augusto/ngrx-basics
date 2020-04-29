import { createAction } from '@ngrx/store'

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