import { AppState } from '../../store';
import { counterFeatureKey } from './counter.actions';
import { createSelector } from '@ngrx/store';

const selectCounterFeature = (state: AppState) => state[counterFeatureKey];

export const selectCounterFeatureCount = createSelector(
    selectCounterFeature,
    (state) => state.counter
);
export const selectCounterFeatureLog = createSelector(
    selectCounterFeature,
    (state) => state.log
)