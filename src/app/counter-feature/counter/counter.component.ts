import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { incrementAction, decrementAction } from '../store/counter.actions';
import { ActionLog } from '../store/counter.reducers';
import { selectCounterFeatureCount, selectCounterFeatureLog } from '../store/counter.selectors';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  count$: Observable<number>;
  log$: Observable<ActionLog[]>;
  constructor(private store: Store) { 
    this.count$ = store.select(selectCounterFeatureCount)
    this.log$ = store.select(selectCounterFeatureLog)
    
  }

  ngOnInit(): void {
  }
  incrementHandler(){
    this.store.dispatch(incrementAction());
  }
  decrementHandler(){
    this.store.dispatch(decrementAction());
  }
}
