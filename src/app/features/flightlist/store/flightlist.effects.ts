import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { 
  loadFlightInfo, 
  loadFlightInfoSuccess, 
  loadFlightInfoFailure,
  loadFlightDetails 
} from './flightlist.actions';
import { FlightInfo } from '../components/models/flight.model';

@Injectable()
export class FlightListEffects {
  loadFlightInfo$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadFlightInfo),
      mergeMap(() => this.http.get<{ flights: FlightInfo[] }>('/assets/book.json')
        .pipe(
          map(response => loadFlightInfoSuccess(response.flights[0])),
          catchError(error => of(loadFlightInfoFailure(error.message)))
        ))
    )
  );

  loadFlightDetails$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadFlightDetails),
      mergeMap(({ FlightInfo }) => 
        this.http.get<{ flights: FlightInfo[] }>('/assets/book.json')
          .pipe(
            map(response => {
              const flight = response.flights.find(f => f.id === FlightInfo.id);
              return loadFlightInfoSuccess(flight || response.flights[0]);
            }),
            catchError(error => of(loadFlightInfoFailure(error.message)))
          ))
    )
  );

  constructor(
    private actions$: Actions,
    private http: HttpClient
  ) {}
}