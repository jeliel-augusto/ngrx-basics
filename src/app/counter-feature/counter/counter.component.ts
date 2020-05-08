import {Component, OnDestroy, OnInit} from '@angular/core';
import { Observable } from 'rxjs';
import {ActionsSubject, Store} from '@ngrx/store';
import {
  incrementAction,
  decrementAction,
  saveAction,
  saveStateSuccess,
  saveStateNotSuccess, loadState
} from '../store/counter.actions';
import { ActionLog } from '../store/counter.reducers';
import { selectCounterFeatureCount, selectCounterFeatureLog } from '../store/counter.selectors';
import { AngularFireAuth } from '@angular/fire/auth';
import {filter, map} from 'rxjs/operators';
import {CounterEffects} from "../store/effects/counter.effects";
import {ofType} from "@ngrx/effects";

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit, OnDestroy {

  count$: Observable<number>;
  log$: Observable<ActionLog[]>;
  autenticated$: Observable<boolean>;
  saveSuccess$;
  saveFailure$;
  constructor(
    private store: Store,
    private counterEffects: CounterEffects,
    private auth: AngularFireAuth,
    private actionsSubject: ActionsSubject) {

  }

  ngOnInit(): void {
    this.count$ = this.store.select(selectCounterFeatureCount)
    this.log$ = this.store.select(selectCounterFeatureLog)
    this.autenticated$ = <Observable<boolean>>this.auth.user.pipe(map(user => user !== null))
    this.saveSuccess$ = this.actionsSubject.pipe(ofType(saveStateSuccess))
    this.saveFailure$ = this.actionsSubject.pipe(ofType(saveStateNotSuccess))
    this.store.dispatch(loadState());
  }
  ngOnDestroy(){
  }
  incrementHandler(){
    this.store.dispatch(incrementAction());
  }
  decrementHandler(){
    this.store.dispatch(decrementAction());
  }
  saveState(){
    this.store.dispatch(saveAction());
  }
  logout(){
    this.auth.signOut();
  }
}
