import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { HttpClientModule } from '@angular/common/http';
import { flightListReducer } from './store/flightlist.reducer';
import { FlightListEffects } from './store/flightlist.effects';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    StoreModule.forFeature('flightList', flightListReducer),
    EffectsModule.forFeature([FlightListEffects])
  ]
})
export class FlightListModule { } 