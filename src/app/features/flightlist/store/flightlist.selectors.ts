import { createFeatureSelector, createSelector } from '@ngrx/store';
import { FlightListState } from './flightlist.reducer';

export const selectFlightListState = createFeatureSelector<FlightListState>('flightList');

export const selectFlightInfo = createSelector(
  selectFlightListState,
  (state: FlightListState) => state.flightInfo
);

export const selectFlightListLoading = createSelector(
  selectFlightListState,
  (state: FlightListState) => state.loading
);

export const selectFlightListError = createSelector(
  selectFlightListState,
  (state: FlightListState) => state.error
);
