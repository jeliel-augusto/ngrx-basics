import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {
  counterFeatureKey,
  loadState,
  saveAction,
  saveStateNotSuccess,
  saveStateSuccess,
  setState
} from "../counter.actions";
import {AngularFireDatabase} from "@angular/fire/database";
import {
  catchError,
  concatMap,
  exhaustMap,
  filter,
  map,
  mergeMap,
  switchMap, switchMapTo,
  takeLast,
  tap,
  withLatestFrom
} from "rxjs/operators";
import {AngularFireAuth} from "@angular/fire/auth";
import {select, Store} from "@ngrx/store";
import {AppState} from "../../../store";
import {EMPTY, from, of} from "rxjs";
import {ActionLog, CounterState} from "../counter.reducers";

@Injectable()
export class CounterEffects{
  save$ = createEffect(
    () => this.actions$.pipe(
      ofType(saveAction),
      switchMap(action => this.store.select(counterFeatureKey)),
      withLatestFrom(this.auth.user),
      filter(([state, user]) => user !== null),
      map(([state, user]) => ([state, user.uid])),
      tap(console.log),
      exhaustMap(([currentState, uid]) =>
        from(this.db.object(`states/${uid}`).set(currentState)).pipe(
          map(() => {
            return saveStateSuccess()
          }),
          catchError((error) => {
            return of(saveStateNotSuccess({error: 'Failure saving state, try again'}))
          })
        )
      )
    ),
  )
  loadCounter$ = createEffect(
    () => this.actions$.pipe(
      ofType(loadState),
      switchMap((action) => this.auth.user),
      filter(user => user !== null),
      exhaustMap(
        (user) => from(this.db.object(`states/${user.uid}`).valueChanges()).pipe(
          map((savedState: {counter: number, log: object}) => {
            // return setState(savedState)
            let logArray: ActionLog[] = []
            if(savedState.log){
              for(let key in savedState.log){
                logArray.push(savedState.log[key])
              }
            }
            let newState: CounterState = {
              counter: savedState.counter,
              log: logArray
            }

            return setState(newState);
          }),
          catchError(() => EMPTY)
        )
      )
    ),
  )
  constructor(private actions$: Actions,
              private db: AngularFireDatabase,
              private store: Store<AppState>,
              private auth: AngularFireAuth) {
  }
}
