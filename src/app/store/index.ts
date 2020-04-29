import { createSelector } from '@ngrx/store';
import { CounterState, counterFeatureKey} from '../counter-feature/store/counter.reducers';

export interface AppState{
    [counterFeatureKey]: CounterState
}
