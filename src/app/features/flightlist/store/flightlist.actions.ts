import { FlightInfo } from './../components/models/flight.model';
import { createAction } from "@ngrx/store";

export const loadFlightInfo = createAction('[Flight] Load Flight Info');

export const loadFlightInfoSuccess = createAction(
    '[Flight] Load Flight Info Success',
    (flightInfo: FlightInfo) => ({ flightInfo })
);

export const loadFlightInfoFailure = createAction(
    '[Flight] Load Flight Info Failure',
    (error: string) => ({ error })
);

export const loadFlightDetails = createAction(
    '[Flight] Load Flight Details',
     (FlightInfo: FlightInfo) => ({ FlightInfo })
);

