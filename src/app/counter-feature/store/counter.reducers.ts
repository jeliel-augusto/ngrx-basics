import { createReducer, on } from '@ngrx/store';
import { incrementAction, decrementAction, resetAction } from './counter.actions';

export interface ActionLog{
    name: string,
    previousState: string,
}
export interface CounterState{
    counter: number,
    log: ActionLog[]
}
const initialState: CounterState = {
    counter: 0,
    log: []
}
const _counterReducer = createReducer(
    initialState,
    on(incrementAction, (state: CounterState)=>(
        { 
            counter: state.counter + 1, 
            log: [
              ...state.log,
                {   name: 'Increment', 
                    previousState: `Counter: ${state.counter}`
                }
            ]
        }
    )),
    on(decrementAction, (state: CounterState)=>(
        { 
            counter: state.counter - 1, 
            log: [
              ...state.log,
                {   name: 'Decrement', 
                    previousState: `Counter: ${state.counter}`
                }
            ]
        }
    )),
    on(resetAction, (state: CounterState)=>({counter: 0,
        log: [
            ...state.log,
              {   name: 'Decrement', 
                  previousState: `Counter: ${state.counter}`
              }
        ]
    }))
)
export function counterReducer(state, action){
    return _counterReducer(state, action);
}
export const counterFeatureKey = 'counterFeature'