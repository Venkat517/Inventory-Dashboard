import { Routes } from '@angular/router';
import { DashboardComponent } from './features/dashboard/dashboard.component';
import { PatientListComponent } from './features/patients/containers/patient-list/patient-list.component';
import { FlightListComponent } from './features/flightlist/components/flight-list/flight-list.component';

export const routes: Routes = [
    {
        path: 'dashboard',
        component: DashboardComponent
    },
    {
        path: 'patients',
        component: PatientListComponent
    },
    {
        path: 'flights',
        component: FlightListComponent
    },
    {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
    }
];
