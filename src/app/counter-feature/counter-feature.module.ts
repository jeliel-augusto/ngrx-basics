import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CounterComponent } from './counter/counter.component';
import { counterFeatureKey, counterReducer } from './store/counter.reducers';
import { StoreModule } from '@ngrx/store';
import { RouterModule } from '@angular/router';
import {EffectsModule} from "@ngrx/effects";
import {CounterEffects} from "./store/effects/counter.effects";

@NgModule({
  declarations: [CounterComponent],
  imports: [
    CommonModule,
    RouterModule,
    StoreModule.forFeature(counterFeatureKey, counterReducer),
    EffectsModule.forFeature([CounterEffects])
  ],
  providers: [],
  exports: [
    CounterComponent
  ]
})
export class CounterFeatureModule { }
