import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { FlightInfo } from '../models/flight.model';
import { 
  loadFlightInfo, 
  loadFlightDetails 
} from '../../store/flightlist.actions';
import { 
  selectFlightInfo, 
  selectFlightListLoading, 
  selectFlightListError 
} from '../../store/flightlist.selectors';
import { FlightListState } from '../../store/flightlist.reducer';

@Component({
  selector: 'app-flight-list',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="flight-list">
      <h2>Flight List</h2>
      
      <div *ngIf="loading$ | async" class="loading">
        Loading flights...
      </div>
      
      <div *ngIf="error$ | async as error" class="error">
        Error: {{ error }}
      </div>
      
      <div *ngIf="flightInfo$ | async as flight" class="flight-info">
        <h3>Flight Details</h3>
        <p>Flight Number: {{ flight.flightNumber }}</p>
        <p>Origin: {{ flight.origin }}</p>
        <p>Destination: {{ flight.destination }}</p>
        <p>Departure: {{ flight.departureTime | date:'medium' }}</p>
        <p>Arrival: {{ flight.arrivalTime | date:'medium' }}</p>
        <p>Airline: {{ flight.airline }}</p>
        <p>Status: {{ flight.status }}</p>
      </div>
      
      <button (click)="loadFlights()">Load Flights</button>
    </div>
  `,
  styles: [`
    .flight-list {
      padding: 20px;
    }
    .loading {
      color: #666;
      font-style: italic;
    }
    .error {
      color: red;
      margin: 10px 0;
    }
    .flight-info {
      margin: 20px 0;
      padding: 15px;
      border: 1px solid #ddd;
      border-radius: 4px;
    }
    button {
      padding: 8px 16px;
      background-color: #007bff;
      color: white;
      border: none;
      border-radius: 4px;
      cursor: pointer;
    }
    button:hover {
      background-color: #0056b3;
    }
  `]
})
export class FlightListComponent implements OnInit {
  flightInfo$: Observable<FlightInfo | null>;
  loading$: Observable<boolean>;
  error$: Observable<string | null>;

  constructor(private store: Store<{ flightList: FlightListState }>) {
    this.flightInfo$ = this.store.select(selectFlightInfo);
    this.loading$ = this.store.select(selectFlightListLoading);
    this.error$ = this.store.select(selectFlightListError);
  }

  ngOnInit(): void {
    this.loadFlights();
  }

  loadFlights(): void {
    this.store.dispatch(loadFlightInfo());
  }
} 