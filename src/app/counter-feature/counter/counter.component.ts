import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { incrementAction, decrementAction } from '../store/counter.actions';
import { ActionLog } from '../store/counter.reducers';
import { selectCounterFeatureCount, selectCounterFeatureLog } from '../store/counter.selectors';
import { AngularFireAuth } from '@angular/fire/auth';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  count$: Observable<number>;
  log$: Observable<ActionLog[]>;
  autenticated$: Observable<boolean>;
  constructor(
    private store: Store,
    private auth: AngularFireAuth) { 
    this.count$ = store.select(selectCounterFeatureCount)
    this.log$ = store.select(selectCounterFeatureLog)
    this.autenticated$ = <Observable<boolean>>auth.user.pipe(map(user => user !== null))
  }

  ngOnInit(): void {
  }
  incrementHandler(){
    this.store.dispatch(incrementAction());
  }
  decrementHandler(){
    this.store.dispatch(decrementAction());
  }
  saveState(){

  }
  logout(){
    this.auth.signOut();
  }
}
