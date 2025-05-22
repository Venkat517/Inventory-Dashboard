import { createReducer, on } from '@ngrx/store';
import { FlightInfo } from '../components/models/flight.model';
import { 
  loadFlightInfo, 
  loadFlightInfoSuccess, 
  loadFlightInfoFailure,
  loadFlightDetails 
} from './flightlist.actions';

export interface FlightListState {
  flightInfo: FlightInfo | null;
  error: string | null;
  loading: boolean;
}

export const initialState: FlightListState = {
  flightInfo: null,
  error: null,
  loading: false
};

export const flightListReducer = createReducer(
  initialState,
  on(loadFlightInfo, (state) => ({
    ...state,
    loading: true,
    error: null
  })),
  on(loadFlightInfoSuccess, (state, { flightInfo }) => ({
    ...state,
    flightInfo,
    loading: false,
    error: null
  })),
  on(loadFlightInfoFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error
  })),
  on(loadFlightDetails, (state) => ({
    ...state,
    loading: true,
    error: null
  }))
);
