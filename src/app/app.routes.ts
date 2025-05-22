import { Routes } from '@angular/router';
import { DashboardComponent } from './features/dashboard/dashboard.component';
import { FlightListComponent } from './features/flightlist/components/flight-list/flight-list.component';

export const routes: Routes = [
    {
        path: 'dashboard',
        component: DashboardComponent
    },
    {
        path: 'patients',
        loadChildren: () => import('./features/patients/patients.module').then(m => m.PatientsModule)
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
