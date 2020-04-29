import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CounterComponent } from './counter/counter.component';
import { counterFeatureKey, counterReducer } from './store/counter.reducers';
import { StoreModule } from '@ngrx/store';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [CounterComponent],
  imports: [
    CommonModule,
    RouterModule,
    StoreModule.forFeature(counterFeatureKey, counterReducer)
  ],
  exports: [
    CounterComponent
  ]
})
export class CounterFeatureModule { }
