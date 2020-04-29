import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CounterComponent } from './counter/counter.component';
import { counterFeatureKey, counterReducer } from './store/counter.reducers';
import { StoreModule } from '@ngrx/store';


@NgModule({
  declarations: [CounterComponent],
  imports: [
    CommonModule,
    StoreModule.forFeature(counterFeatureKey, counterReducer)
  ],
  exports: [
    CounterComponent
  ]
})
export class CounterFeatureModule { }
